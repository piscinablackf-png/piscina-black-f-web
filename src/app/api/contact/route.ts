import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'El nombre y el correo son obligatorios' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['piscinablackf@gmail.com'],
      subject: `Nueva cotización de ${name} - Piscina Black-F`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0070f3; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">Nueva solicitud de cotización</h2>
          <p style="font-size: 16px; color: #333;">Has recibido una nueva solicitud de cotización desde la página web de Piscina Black-F.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Nombre:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Correo:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Teléfono:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || 'No proporcionado'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Servicio de interés:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${service}</td>
            </tr>
          </table>
          
          <h3 style="color: #444; margin-top: 30px;">Mensaje adicional:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0070f3; border-radius: 4px; font-style: italic;">
            ${message ? message.replace(/\n/g, '<br>') : 'Sin mensaje adicional'}
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">Este correo ha sido enviado automáticamente desde tu sitio web.</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error interno del servidor al procesar la solicitud' },
      { status: 500 }
    );
  }
}
