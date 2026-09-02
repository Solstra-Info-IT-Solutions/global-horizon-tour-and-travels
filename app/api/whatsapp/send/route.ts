import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
try {
const { to, message } = await request.json();

if (!to || !message) {
  return NextResponse.json(
    {
      success: false,
      message: 'Phone number and message are required',
    },
    { status: 400 }
  );
}

const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

if (!accessToken || !phoneNumberId) {
  return NextResponse.json(
    {
      success: false,
      message: 'WhatsApp credentials are missing in .env.local',
    },
    { status: 500 }
  );
}

// Remove +, spaces, brackets, etc.
const cleanPhoneNumber = to.replace(/\D/g, '');

const response = await fetch(
  `https://graph.facebook.com/v22.0/${phoneNumberId}/messages`,
  {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: cleanPhoneNumber,
      type: 'text',
      text: {
        preview_url: false,
        body: message,
      },
    }),
  }
);

const data = await response.json();

if (!response.ok) {
  console.error('WhatsApp API Error:', data);

  return NextResponse.json(
    {
      success: false,
      error: data,
    },
    { status: response.status }
  );
}

return NextResponse.json({
  success: true,
  message: 'WhatsApp message sent successfully',
  data,
});


} catch (error) {
console.error('Server Error:', error);

return NextResponse.json(
  {
    success: false,
    message: 'Internal server error',
  },
  { status: 500 }
);

}
}
