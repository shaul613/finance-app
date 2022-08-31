select * from product
select * from  cc
select * from crypto_exchange
select * from crypto_exchange

delete from product where product_issuer = 5
delete from crypto_exchange where crypto_exchange_id = 9

insert into crypto_exchange
values (9, '$10 in Bitcoin', 'See <a href=''https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees''>pricing and fees</a>')

create table msg(
  msg_id serial not null primary key,
  msg_title varchar(64) not null,
  msg_name varchar(64) default 'Anonymous' not null,
  msg_body varchar(10000) not null
)

select * from msg_likes

alter table msg add msg_likes integer default 0


create table msg_likes(
  	like_id serial not null primary key,
	msg_id integer not null references msg(msg_id),
	like_ip_address varchar(1024) not null
)

select m.*, (select count(*) from msg_likes l where l.msg_id = m.msg_id)
from msg m
group by m.msg_id
order by m.msg_id