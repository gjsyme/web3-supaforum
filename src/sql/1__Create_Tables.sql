-- not that this will actually be used like a migration, but whatever
-- todo look up right size for wallet_id and nano_id (tried nano_id but didnt' find anyone addressing it)
-- we may end up just going with UUID as it appears that is what is going on inside of supabase

-- nuclear option
-- DROP TABLE IF EXISTS roles;
-- DROP TABLE IF EXISTS accounts;
-- DROP TABLE IF EXISTS forums;
-- DROP TABLE IF EXISTS threads;
-- DROP TABLE IF EXISTS messages;

CREATE TABLE IF NOT EXISTS roles (
  id uuid not null primary key,
  name varchar(256)
);

CREATE TABLE IF NOT EXISTS accounts (
  id uuid not null primary key,
  nano_id varchar(256) not null,
  wallet_id varchar(128) not null,
  email varchar(256),
  active boolean not null default true,
  created_at timestamp default current_timestamp,
  CONSTRAINT fk_auth_user FOREIGN KEY (id) REFERENCES auth.users(id)
);

CREATE TABLE IF NOT EXISTS forums (
  id uuid not null primary key,
  account_id uuid not null,
  nano_id varchar(256) not null,
  domain varchar(256),
  name varchar(256),
  active boolean not null default true,
  created_at timestamp default current_timestamp,
  CONSTRAINT fk_account FOREIGN KEY (account_id) REFERENCES accounts(id)
);

CREATE TABLE IF NOT EXISTS threads (
  id uuid not null primary key,
  account_id uuid not null,
  forum_id uuid not null,
  name varchar(256),
  description varchar(1024),
  open boolean default true,
  created_at timestamp default current_timestamp,
  deleted_at timestamp,
  CONSTRAINT fk_account FOREIGN KEY (account_id) REFERENCES accounts(id),
  CONSTRAINT fk_forum FOREIGN KEY (forum_id) REFERENCES forums(id)
);

CREATE TABLE IF NOT EXISTS messages (
  id uuid not null primary key,
  account_id uuid not null,
  forum_id uuid not null,
  thread_id uuid not null,
  text text,
  created_at timestamp default current_timestamp,
  deleted_at timestamp
)