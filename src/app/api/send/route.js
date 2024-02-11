// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "MZohaib <mzohaibhasan27@gmail.com>",
      to: ["mzohaibhasan27@gmail.com"],
      subject: "hi, this is testing",
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
