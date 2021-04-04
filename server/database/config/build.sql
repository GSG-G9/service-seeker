BEGIN;
DROP TABLE IF EXISTS users,
providers,
ordes_request,
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
    role VARCHAR(55) DEFAULT 'user'
);
CREATE TABLE providers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL,
    title TEXT,
    bio TEXT,
    price_hour FLOAT,
    availability boolean DEFAULT false,
    rating INTEGER DEFAULT 100,
    cover_image TEXT
);
CREATE TABLE ordes_request (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL,
    provider_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL,
    decription TEXT NOT NULL,
    state VARCHAR(55) DEFAULT 'pending',
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    ordes_request_id INTEGER REFERENCES ordes_request(id) ON UPDATE CASCADE NOT NULL,
    start_date TIMESTAMP,
    pasued_date TIMESTAMP,
    state VARCHAR(55),
    arrive_time TIME(7),
    houer_number FLOAT,
    resources_price FLOAT,
    total_bill_price FLOAT
);
CREATE TABLE notification (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL,
    decription TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
COMMIT;