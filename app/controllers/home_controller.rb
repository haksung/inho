class HomeController < ApplicationController
    require 'mailgun'
    
    def index
    end
    
    def real_index
    end
    
    def about
    end
    
    def people
    end
    
    def project
    end
    
    def news
      @boards = New.all
    end
    
    def service
    end
    
    def contact
    end
    
    def write_mail
        
        @sender = params[:sender]
        @email = params[:email]
        @number = params[:number]
        @title = params[:title]
        @content = params[:content]

        @content = "이름 : " + @sender + "\n\n연락처 : " + @number + "\n\n내용 : " + @content

        Usermailer.welcome_email(@email, @title, @content).deliver_now

        redirect_to "/contact"
    
    end
    

=begin  
    # This is for login & news 
    def admin
      if model_signed_in?
      
      else
        redirect_to "/admin_login"
      end
    end
    
    def admin_login
      if model_signed_in?
        redirect_to "/admin"
      end
      @boards = New.all
    end
    
    def delete
      @del = params[:delete_id]
      news = New.find(@del).delete
      news.save
      redirect_to "/admin_login"
    end
    
    def img_send
      uploader = AvatarUploader.new
     

      @news_img = params[:news_img]
      @img_name = params[:news_img].original_filename
      @news_title = params[:news_title]
      @news_content = params[:news_content]
      
      a = New.new(title: @news_title,content: @news_content,img_src: @img_name)
      a.save
      
      uploader.store!(@news_img)
      
      redirect_to "/news"
    end
=end

end
