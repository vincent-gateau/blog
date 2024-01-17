# Mld

user (user_id,username,password,email,role)

article (article_id,title,content,date_published,#user_id,#comment_id)

category (category_id,category_name)

article_has_category(article_id,category_id)

comment (comment_id,#article_id,#user_id,content,date_posted)
