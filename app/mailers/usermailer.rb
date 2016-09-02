class Usermailer < ApplicationMailer
	def welcome_email email, title, content
		mail from: email,
		to: 'hjh123920513@naver.com',
		subject: title,
		body: content
	end
		
end
