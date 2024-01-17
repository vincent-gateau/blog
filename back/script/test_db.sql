INSERT INTO "User" (username, mail, password, role)
VALUES
    ('alice', 'alice@example.com', 'hashed_password', 'member'),
    ('bob', 'bob@example.com', 'hashed_password', 'member'),
    ('charlie', 'charlie@example.com', 'hashed_password', 'member'),
    ('david', 'david@example.com', 'hashed_password', 'admin');

INSERT INTO "Category" (name)
VALUES
    ('Technology'),
    ('Science'),
    ('Sports'),
    ('Food');

INSERT INTO "Article" (article_name, content, category_id, user_id)
VALUES
    ('Getting Started with PostgreSQL', 'PostgreSQL is...', 1, 1),
    ('Advancements in Quantum Computing', 'Quantum computing is...', 2, 2),
    ('Tips for a Healthy Lifestyle', 'Eating well and exercising...', 3, 3);

INSERT INTO "Commentaires" (content, article_id, user_id)
VALUES
    ('Great introduction!', 1, 2),
    ('I love this article!', 1, 4),
    ('Interesting topic!', 2, 1),
    ('Looking forward to more!', 2, 3);

INSERT INTO "Article_has_Category" (article_id, category_id)
VALUES
    (1, 1),
    (2, 1),
    (2, 2),
    (3, 3);
