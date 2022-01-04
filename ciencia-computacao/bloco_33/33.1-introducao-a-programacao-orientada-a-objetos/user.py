import smtplib
import ssl

class User:
    def __init__(self, name, email, password):
        """ Método construtor da classe User. Note que
        o primeiro parâmetro deve ser o `self`. Isso é
        uma particularidade de Python, vamos falar mais
        disso adiante!"""
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self):
        meu_mailer = Mailer("password_reset@teste.com", "myverysafepassword", self.email)
        meu_mailer.send_email("Reset your password", "Instruções para resetar a senha, com o link de resetar")
        """ Só com isso a função não irá funcionar! O email em
        questão não existe e costuma ser necessário configurar
        permissões no servidor de email para o envio ocorrer. Se
        quiser, explore isso como exercício bônus! (Por segurança,
        crie uma nova conta de e-mail para testar).
        Por hora, basta entender a lógica aqui! """

class Mailer:
    def __init__(self, from_email, from_password, to_email):
        self.from_email = from_email  # email de origem
        self.from_password = from_password  # senha do email de origem
        self.to_email = to_email  # email a receber a mensagem

    def send_email(self, subject, message):
        body = f"Subject: {subject}\n\n{message}".encode('utf-8')
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(self.from_email, self.from_password)
            try:
                server.sendmail(self.from_email, self.to_email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise ValueError

# Para invocar o método construtor, a sintaxe é NomeDaClasse(parametro 1, parametro 2)
# Repare que o parâmetro self foi pulado -- um detalhe do Python.
meu_user = User("Diego Serafim", "diegoserafim@mail.com", "senha")

# A variável `meu_user` contém o objeto criado pelo construtor da classe User!
print(meu_user)
print(meu_user.name)
print(meu_user.email)
print(meu_user.password)

meu_user.reset_password()
