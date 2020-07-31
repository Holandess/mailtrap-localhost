import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements IMailProvider {
  private transporte: Mail;
  constructor() {
    this.transporte = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "Mailtrap User",
        pass: "Mailtrap Pass",
      },
    });
  }
  async sendMail(message: IMessage): Promise<void> {
    await this.transporte.sendMail({
      to: {
        name: message.to.email,
        address: message.to.email,
      },
      from: {
        name: message.from.email,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
