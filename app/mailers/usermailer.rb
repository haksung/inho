class Usermailer < ApplicationMailer
	def welcome_email email, title, content
		mail from: email,
		to: 'leekangarchitecture@gmail.com',
		subject: title,
		body: content
	end
		
end
