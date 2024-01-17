BEGIN;

DROP TABLE IF EXISTS "User","Category","Article","Commentaires","Article_has_Category";

-- table pour gérer les utilisateurs de mon application web
CREATE TABLE "User" (
    id serial PRIMARY KEY,
    username text NOT NULL UNIQUE,
    mail text NOT NULL UNIQUE,
    password text NOT NULL,
    role text NOT NULL DEFAULT 'member'
);

-- table qui contient les catégories
CREATE TABLE "Category" (
    id serial PRIMARY KEY,
    name text NOT NULL UNIQUE
);

-- table qui contient les articles
CREATE TABLE "Article" (
    id serial PRIMARY KEY,
    article_name text NOT NULL UNIQUE,
    content text,
    article_image bytea,
    category_id int NOT NULL REFERENCES "Category"(id),
    user_id int NOT NULL REFERENCES "User"(id),
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ
);

-- table qui contient les commentaires
CREATE TABLE "Commentaires" (
    id serial PRIMARY KEY,
    content text,
    article_id int NOT NULL REFERENCES "Article"(id),
    user_id int NOT NULL REFERENCES "User"(id),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- table d'association entre article et category
CREATE TABLE "Article_has_Category"( 
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    article_id int NOT NULL REFERENCES "Article"(id),
    category_id int NOT NULL REFERENCES "Category"(id)
);

COMMIT;
