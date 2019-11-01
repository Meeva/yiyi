#功能一:创建用户登录表并且添加数据
#1，进入yiyi库
USE yiyi;
#2，创建表 yiyi_product
#3，添加几列
CREATE TABLE yiyi_product(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(32),
    pname VARCHAR(32),
    price VARCHAR(32),
    yprice VARCHAR(32),
    img VARCHAR(255)
);
INSERT INTO yiyi_product VALUES(null,'小时光','草莓奶油蛋糕','198元/1.0磅','298元/1.0磅','http://localhost:3002/pulilc/01.jpg');
INSERT INTO yiyi_product VALUES(null,'果篮','白巧水果奶油,超满足','168元/1.0磅','198元/1.0磅','http://localhost:3002/pulilc/02.jpg');
INSERT INTO yiyi_product VALUES(null,'Gelato榴莲冰淇淋蛋糕','榴莲冰淇淋蛋糕','198元/1.0磅','298元/1.0磅','http://localhost:3002/pulilc/03.jpg');
INSERT INTO yiyi_product VALUES(null,'榴芒双拼','畅销人气经典，原创专利','198元/1.0磅','298元/1.0磅','http://localhost:3002/pulilc/05.jpg');


INSERT INTO yiyi_product VALUES(null,'四季','一次畅享4种人气经典','288元/2.0磅','298元/1.0磅','http://localhost:3002/pulilc/06.jpg');
INSERT INTO yiyi_product VALUES(null,'榴莲忘返','榴莲控只叹相见恨晚','198元/1.0磅','298元/1.0磅','http://localhost:3002/pulilc/07.jpg');
INSERT INTO yiyi_product VALUES(null,'Gelato双子星冰淇淋','芒果椰子冰淇淋蛋糕','198元/1.0磅','298元/1.0磅','http://localhost:3002/pulilc/08.jpg');
-- INSERT INTO xz_login VALUES(null,'tom',md5('123'));
-- INSERT INTO xz_login VALUES(null,'jerry',md5('123'));
-- INSERT INTO xz_login VALUES(null,'sunny',md5('123'));

-- USE xz;
CREATE TABLE yiyi_login(
id INT PRIMARY KEY AUTO_INCREMENT,
uid INT,
count INT,
uname VARCHAR(255),
upwd VARCHAR(32)
);
INSERT INTO yiyi_login VALUES(null,null,null,'sunny',md5('123'));
INSERT INTO yiyi_login VALUES(null,null,null,'tom',md5('123123'));
INSERT INTO yiyi_login VALUES(null,null,null,'meeva',md5('123123'));