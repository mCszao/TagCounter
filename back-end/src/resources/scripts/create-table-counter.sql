CREATE TABLE counter (
 id_analytics UUID NOT NULL ,
 tag_selector VARCHAR(255) NOT NULL,
 quantity INTEGER NOT NULL,
 FOREIGN KEY (id_analytics) REFERENCES analytics(id)
);
