create table products_test(
	product_id serial not null primary key,
	product_name varchar(255) not null,
	product_desc varchar(5000) not null,
	ref_link varchar(1024),
	product_img varchar(1024)
);

insert into products_test(product_name, product_desc, ref_link, product_img)
values
	('Hello',
	 'some desc',
	 'https://www.americanexpress.com/en-us/credit-cards/referral/prospect/personal/9E9319A6C9C420576FC956683E764A9C378A3C7EFCFF16653AD8900CBF5BDBCD42F5FB1476008E147D110F431F952A8C73F501BE36D9728164FDD9FF86EB099B922ED55EC83D9B99C35BEB8A8E4F4B9208C54D6AD6BC791C5BD2C27D80FABDB2916D157A6EDAC77961B3AD5B9A03C5CCC5D62005F02EFFFDB3C95C5222C4D9B0?XLINK=MYCP',
	 'https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/amex-everyday-preferred.png'
	)

select * from product_issuer

create table product(
		product_id serial not null primary key,
		product_issuer integer not null references product_issuer(issuer_id),
		product_type integer not null references product_type(type_id),
		product_name varchar(255) not null,
		product_img varchar(1024) not null,
		product_desc varchar(10000),
		product_ref_link varchar(1024) not null,
		product_exp timestamp not null,
		product_display boolean not null default false
)

insert into product (product_issuer, product_type, product_name, product_img, product_desc,
					product_ref_link, product_exp, product_display)
values (
	(select issuer_id from product_issuer where issuer_name Like 'American Express'),
	(select type_id from product_type where type_name Like 'Credit Card'),
	'American Express® Gold Card',
	'https://icm.aexp-static.com/acquisition/card-art/NUS000000174_480x304_straight_withname.png',
	'You can earn 4X on dining and groceries, 3X on filghts, and 1X on all other purchases. You also get $120 Uber credit annualy towards Uber rides and a $120 dining credit.',
	'https://www.americanexpress.com/en-us/credit-cards/referral/prospect/personal/9E9319A6C9C420576FC956683E764A9C378A3C7EFCFF16653AD8900CBF5BDBCD42F5FB1476008E144691E769D0F60E9073F501BE36D97281FBF2C2BCC148263422F7749EE1EBF29296467BD13920CE9C08C54D6AD6BC791C5BD2C27D80FABDB257FAE08EA1C781753DB9AAED0B43DACFC5D62005F02EFFFDB3C95C5222C4D9B0?XLINK=MYCP',
	(select now() + interval '2 week'),
	true
)

select * from product

create table cc(
	cc_id integer not null primary key references product(product_id),
	cc_sub varchar(255),
	cc_score integer not null,
	cc_interest varchar(64)
)

insert into cc values (
	(select product_id from product where product_name Like 'American Express® Gold Card'),
	'75,000 points for a limited time only!!! After spending $4,000 in the first 6 months.',
	700,
	'18.24% to 25.24%'
)

insert into product (product_issuer, product_type, product_name, product_img, product_desc,
					product_ref_link, product_exp, product_display)
values (
	(select issuer_id from product_issuer where issuer_name Like 'Gemini'),
	(select type_id from product_type where type_name Like 'Crypto'),
	'Gemini',
	'https://www.gemini.com/_next/static/images/gemini-hor-dark-full-rgb@3x-9ca366d2cb2926cddbbfcb1cdfbcae77.png.webp',
	'Purchase from over 100 cryptocurrencies with the option to earn interest at higher rates than traditional savings accounts. Gemini also offers other a credit card that earns rewards in a crypto of your choice. Sign up with the link below to get started!',
	'https://gemini.com/share/ee84p5te',
	(select now() + interval '2 week'),
	true
)

insert into product_issuer(issuer_name)
values ('Gemini')

create table crypto_exchange(
	crypto_exchange_id integer not null primary key references product(product_id),
	crypto_exchange_sub varchar(255),
	trading_fees varchar(512) not null
)

insert into crypto_exchange
values(
	(select product_id from product where product_name Like 'Gemini'),
	'$10 in Bitcoin',
	'Depending on currency. Lower fees for trading via Gemini''s ActiveTrader platform see <a href=''https://www.gemini.com/fees''>fee schedule<a/> for more details.'
)

select * from crypto_exchange
