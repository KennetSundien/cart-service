Requirements:
	- Docker

Todos:
	- input/business validation
	- JsonWebTokens for security
	- https
	- tests
	- Restrict what can be updated ie. the user id of the cart should not be updated.
	- Add layer between controller and persistence ie. repositories

Getting started:
	Run powershell scripts for docker-compose shortcuts
	application will run on port 8000
	
	- Create a cart
	POST http://localhost:8000/carts
		body (json)
		{
		"userId": 1,
		"items":[
			{
			"itemNumber": "AB12445",
			"productName": "Legos",
			"productId": 42,
			"quantity": 99
			},
			{
			"itemNumber": "BB9999999",
			"productName": "More Legos",
			"productId": 43,
			"quantity": 11
			}
			]
		}
	
	- Get all cart
	GET http://localhost:8000/carts
	
	- Delete cart
	DELETE http://localhost:8000/carts/62ea1f6f32d371b406a87136
	
	- Delete item in cart
	DELETE http://localhost:8000/carts/62e9977b89fb8460c3e391f2/remove-item/42
	42 is the productId
	
	- Update cart
	PUT http://localhost:8000/carts/62e9977b89fb8460c3e391f2
	body (json)
		See previous example
	
	- Update item in cart
	PUT http://localhost:8000/carts/62e9977b89fb8460c3e391f2/update-item
	body (json)
	{
	"itemNumber": "AB12445",
	"productName": "Legos",
	"productId": 42,
	"quantity": 100
	}
