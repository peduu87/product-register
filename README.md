# Product Register
**Access it on [GitHub Pages](https://peduu87.github.io/product-register/).**
## About the project
Product Register is a HTML and JavaScript based (stylized with CSS and Bootstrap) client tool which is used, in a fictional way, register, describe and precify products and add labels to them. As an example, you can list a dozen different types of spoons and displays it's price and tell if it's for sale or out of stock.  

The purpose of this project is exclusively studying, not aiming any commercial use. Through it's development, this application served as a study object of the technologies used in it by it's only developer.

## How to use
Besides the title and the footer, the application layout has just two major sections: Product Registering and Registered Product. As the name suggests, the first one handles the process of registering the desired products, while the second one displays theese products in a table.  

### Product Registering
In this section, the user must fill five fields (four required) to have a product correctly registered. They are:
- Name; <sup>Required</sup>
- Short description; <sup>Required</sup>
- Price; <sup>Required</sup>
- Origin; <sup>Required</sup>
- Labels. <sup>Optional</sup>

'Name' and 'Short description' fields are standard strings, each one having a max length (30 characters for the name and 45 for the description); 'Price' is treated as a float, having a 8 character max length and 999999.99 as max value; 'Origin' is a required selector, displaying some options for the user to choose; 'Labels' are optionals, as they stand for special conditions, such as stock shortage or a "new product" tag.  

If any of the required fiels are misfilled or there is some problem in the client, an error will be pointed in the interface so the user can rectify it or [report a bug](#bug-reports-and-other-comments).

### Registered Products
In this section, there is a table that holds, as columns, the five fiels of the previous section, but this time to display them, so user can see all the information linked to the registered products (unless when using a smaller screen, because, for spacing reasons, the 'Description' and 'Labels' fields may be disabled).  
Basicaly, there is where the products are listed (and numbered, in the left) and can be checked and consulted by the user.

## Bug reports and other comments
If you witness some weird situation or find any kind of bug in this page, or if you just want to contact me for any comments or coolaborations, you can send an email to pedro.h.silva8787@gmail.com, I would appreciate that.

## Credits
Made by **Pedro H. Silva**, supervised and inspired by [Glauco Todesco](https://github.com/glaucotodesco).  

2025
