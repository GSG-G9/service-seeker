BEGIN;
DROP TABLE IF EXISTS users,
providers,
orders_request,
orders,
notification CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password text NOT NULL,
    username VARCHAR(55) NOT NULL,
    mobile VARCHAR(255) NOT NULL,
    avatar TEXT,
    location VARCHAR(255) NOT NULL,
    role VARCHAR(55) DEFAULT 'user',
    check(role in ('user','provider'))
);
CREATE TABLE providers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL UNIQUE,
    title TEXT,
    service_type VARCHAR(55),
    bio TEXT,
    price_hour FLOAT,
    availability boolean DEFAULT false,
    rating FLOAT DEFAULT 3.5,
    cover_image TEXT
);
CREATE TABLE orders_request (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL,
    provider_id INTEGER REFERENCES providers(user_id) ON UPDATE CASCADE NOT NULL,
    description TEXT NOT NULL,
    state VARCHAR(55) DEFAULT 'pending',
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    check(state in ('pending', 'accepted', 'finished')),
    CONSTRAINT UC_Orders_Request UNIQUE (user_id, provider_id, description)
);
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    orders_request_id INTEGER REFERENCES orders_request(id) ON UPDATE CASCADE NOT NULL,
    start_date TIMESTAMP,
    paused_date TIMESTAMP,
    state VARCHAR(55) DEFAULT 'Accepted',
    arrive_time TIME(6),
    hour_number FLOAT,
    resources_price FLOAT,
    total_bill_price FLOAT,
    check(state in ('Accepted', 'Finished', 'Paused', 'Start'))
);
CREATE TABLE notification (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
COMMIT;
