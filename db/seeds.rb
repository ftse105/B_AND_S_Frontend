# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
require 'json'


User.destroy_all
Product.destroy_all

descriptions = ["Item is Brand New", "Never Worn, Brand New", "DEADSTOCK, BRAND NEW", "This is a brand new item, unopened, with receipt !!"]

user1 = User.create(username: "Frankie", bio: "Hi", password: "123")
user2 = User.create(username: "John", bio: "Hello", password: "123")
user3 = User.create(username: "Chris", bio: "Hey", password: "123")
user4 = User.create(username: "Ryan", bio: "Whats up", password: "123")
user5 = User.create(username: "Lorenzo", bio: "My name is Lorenzo", password: "123")

# https://cors-anywhere.herokuapp.com/
supreme = RestClient.get("https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&keywords=supreme%20ss19&SECURITY-APPNAME=FrankieT-bs-PRD-9721a6b08-992f4998&RESPONSE-DATA-FORMAT=JSON")
# byebug
supremeBody = JSON.parse(supreme.body)
supremeArray = supremeBody["findItemsByKeywordsResponse"]
ss19 = supremeArray[0]["searchResult"][0]["item"]

ss19.each do |item|
  Product.create(
    user_id: [user1.id, user2.id, user3.id, user4.id, user5.id].sample,
    name: item["title"][0],
    description: descriptions.sample,
    image_url: item["galleryURL"][0],
    category:item["primaryCategory"][0]["categoryName"][0],
    size: "N/A",
    price:item["sellingStatus"][0]["currentPrice"][0]["__value__"].to_i,
    sold: false
  )
end

yeezys = RestClient.get("https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&keywords=yeezys&SECURITY-APPNAME=FrankieT-bs-PRD-9721a6b08-992f4998&RESPONSE-DATA-FORMAT=JSON")
# byebug
yeezysBody = JSON.parse(yeezys.body)
yeezysArray = yeezysBody["findItemsByKeywordsResponse"]
allYeezys = yeezysArray[0]["searchResult"][0]["item"]

allYeezys.each do |item|
  Product.create(
    user_id: [user1.id, user2.id, user3.id, user4.id, user5.id].sample,
    name: item["title"][0],
    description: descriptions.sample,
    image_url: item["galleryURL"][0],
    category:item["primaryCategory"][0]["categoryName"][0],
    size: "N/A",
    price:item["sellingStatus"][0]["currentPrice"][0]["__value__"].to_i,
    sold: false
  )
end
