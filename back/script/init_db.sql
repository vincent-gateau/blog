-- je crèe le rôle "admin_oblog" qui a tous les droits
CREATE ROLE admin_theblog WITH LOGIN PASSWORD 'theblog';


-- je crèe la BDD "theblog"
CREATE DATABASE theblog OWNER admin_theblog;

-- psql -U admin_theblog -d theblog -f script/create_table.sql
-- psql -U admin_theblog -d theblog -f script/test_db.sql
-- psql -U admin_theblog -d theblog