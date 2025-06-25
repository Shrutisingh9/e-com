const products = {
    mens: {
        "tshirts": [
            { name: "Crew Neck T-Shirt", price: 22.99, img: "img/crew neck t-shirt.jpeg", desc: "Crew Neck T-Shirt - High quality and style.", reviews: [] },
            { name: "V-Neck T-Shirt", price: 21.49, img: "https://source.unsplash.com/400x400/?mens-tshirt", desc: "V-Neck T-Shirt - High quality and style.", reviews: [] },
            { name: "Henley T-Shirt", price: 24.89, img: "https://source.unsplash.com/400x400/?mens-tshirt", desc: "Henley T-Shirt - High quality and style.", reviews: [] },
            { name: "Graphic Tee", price: 19.99, img: "https://source.unsplash.com/400x400/?graphic-tshirt", desc: "Graphic Tee - High quality and style.", reviews: [] },
            { name: "Striped Polo Shirt", price: 26.79, img: "https://source.unsplash.com/400x400/?polo", desc: "Striped Polo Shirt - High quality and style.", reviews: [] },
            { name: "Solid Polo Shirt", price: 27.59, img: "https://source.unsplash.com/400x400/?mens-polo", desc: "Solid Polo Shirt - High quality and style.", reviews: [] },
            { name: "Printed Polo Shirt", price: 28.99, img: "https://source.unsplash.com/400x400/?polo-shirt", desc: "Printed Polo Shirt - High quality and style.", reviews: [] },
            { name: "Long Sleeve Tee", price: 25.00, img: "https://source.unsplash.com/400x400/?longsleeve", desc: "Long Sleeve Tee - High quality and style.", reviews: [] },
            { name: "Muscle Fit Tee", price: 23.49, img: "https://source.unsplash.com/400x400/?muscle-tshirt", desc: "Muscle Fit Tee - High quality and style.", reviews: [] },
            { name: "Pack of 3 Basic Tees", price: 35.99, img: "https://source.unsplash.com/400x400/?pack-tshirt", desc: "Basic tees in a value pack.", reviews: [] },
            { name: "Athletic Fit Tee", price: 22.39, img: "https://source.unsplash.com/400x400/?gym-tshirt", desc: "Athletic Fit Tee - Great for workouts.", reviews: [] },
            { name: "Contrast Trim Tee", price: 24.29, img: "https://source.unsplash.com/400x400/?contrast-tshirt", desc: "Trimmed for style.", reviews: [] },
            { name: "Washed Look Tee", price: 20.95, img: "https://source.unsplash.com/400x400/?washed-tshirt", desc: "Vintage vibe and soft feel.", reviews: [] },
            { name: "Breathable Mesh Tee", price: 26.25, img: "https://source.unsplash.com/400x400/?mesh-tshirt", desc: "Stay cool all day.", reviews: [] },
            { name: "Casual Cotton T-Shirt", price: 19.99, img: "https://source.unsplash.com/400x400/?casual-tshirt", desc: "Classic and comfortable.", reviews: [] },
            { name: "Classic White T-Shirt", price: 19.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", desc: "100% cotton, classic fit.", reviews: [] },
            { name: "Graphic Print Tee", price: 21.99, img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", desc: "Trendy graphic print, soft fabric.", reviews: [] },
            { name: "Black Crew Neck T-Shirt", price: 18.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Versatile black tee for all occasions.", reviews: [] },
            { name: "Striped Cotton T-Shirt", price: 22.99, img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", desc: "Breathable, stylish stripes.", reviews: [] },
            { name: "V-Neck T-Shirt", price: 20.99, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", desc: "Modern v-neck, slim fit.", reviews: [] },
            { name: "Pack of 3 Crew Neck T-Shirts", price: 29.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", desc: "Assorted colors, soft cotton.", reviews: [] },
            { name: "Sports Dry-Fit Tee", price: 24.99, img: "https://images.unsplash.com/photo-1514995669114-d1c1b7a83a48?auto=format&fit=crop&w=400&q=80", desc: "Moisture-wicking, athletic fit.", reviews: [] },
            { name: "Henley T-Shirt", price: 23.99, img: "https://images.unsplash.com/photo-1517260911205-8c6b8b6b7a5a?auto=format&fit=crop&w=400&q=80", desc: "Buttoned collar, casual style.", reviews: [] },
            { name: "Long Sleeve T-Shirt", price: 25.99, img: "https://images.unsplash.com/photo-1519340333755-c1aa5571fd46?auto=format&fit=crop&w=400&q=80", desc: "Perfect for layering.", reviews: [] },
            { name: "Pocket T-Shirt", price: 19.49, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80", desc: "Classic tee with chest pocket.", reviews: [] },  
        ],
        
        "shirts": [
            { name: "Formal Dress Shirt", price: 31.99, img: "https://source.unsplash.com/400x400/?formal-shirt", desc: "Perfect for business or formal events.", reviews: [] },
            { name: "Checked Button-Down", price: 28.75, img: "https://source.unsplash.com/400x400/?checked-shirt", desc: "Casual and stylish.", reviews: [] },
            { name: "Flannel Shirt", price: 34.49, img: "https://source.unsplash.com/400x400/?flannel-shirt", desc: "Soft and warm flannel.", reviews: [] },
            { name: "Linen Shirt", price: 29.99, img: "https://source.unsplash.com/400x400/?linen-shirt", desc: "Breathable linen for summer.", reviews: [] },
            { name: "Oxford Shirt", price: 33.50, img: "https://source.unsplash.com/400x400/?oxford-shirt", desc: "Classic and versatile.", reviews: [] },
            { name: "Slim Fit Shirt", price: 30.25, img: "https://source.unsplash.com/400x400/?slimshirt", desc: "Tailored for a modern fit.", reviews: [] },
            { name: "Short Sleeve Shirt", price: 26.99, img: "https://source.unsplash.com/400x400/?shortsleeve-shirt", desc: "Casual summer essential.", reviews: [] },
            { name: "Printed Party Shirt", price: 35.59, img: "https://source.unsplash.com/400x400/?party-shirt", desc: "Bold prints, perfect for nights out.", reviews: [] },
            { name: "Classic White Shirt", price: 32.79, img: "https://source.unsplash.com/400x400/?white-shirt", desc: "Wardrobe must-have.", reviews: [] },
            { name: "Casual Striped Shirt", price: 28.89, img: "https://source.unsplash.com/400x400/?striped-shirt", desc: "Lightweight and cool.", reviews: [] },
            { name: "Mandarin Collar Shirt", price: 31.99, img: "https://source.unsplash.com/400x400/?mandarin-collar", desc: "Contemporary style.", reviews: [] },
            { name: "Denim Shirt", price: 36.59, img: "https://source.unsplash.com/400x400/?denim-shirt", desc: "Rugged and trendy.", reviews: [] },
            { name: "Grandad Collar Shirt", price: 33.29, img: "https://source.unsplash.com/400x400/?grandad-shirt", desc: "Minimal and neat.", reviews: [] },
            { name: "Textured Shirt", price: 30.89, img: "https://source.unsplash.com/400x400/?textured-shirt", desc: "Feel the difference.", reviews: [] },
            { name: "Plaid Shirt", price: 29.49, img: "https://source.unsplash.com/400x400/?plaid-shirt", desc: "Classic patterns.", reviews: [] },
            { name: "Slim Fit Formal Shirt", price: 34.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", desc: "Perfect for office and events.", reviews: [] },
            { name: "Checked Casual Shirt", price: 29.99, img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", desc: "Trendy checks, soft cotton.", reviews: [] },
            { name: "Denim Shirt", price: 32.99, img: "https://images.unsplash.com/photo-1514995669114-d1c1b7a83a48?auto=format&fit=crop&w=400&q=80", desc: "Rugged denim, casual look.", reviews: [] },
            { name: "Linen Summer Shirt", price: 36.99, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", desc: "Lightweight, breathable linen.", reviews: [] },
            { name: "Short Sleeve Shirt", price: 27.99, img: "https://images.unsplash.com/photo-1517260911205-8c6b8b6b7a5a?auto=format&fit=crop&w=400&q=80", desc: "Cool and casual.", reviews: [] },
            { name: "Mandarin Collar Shirt", price: 31.99, img: "https://images.unsplash.com/photo-1519340333755-c1aa5571fd46?auto=format&fit=crop&w=400&q=80", desc: "Modern mandarin collar.", reviews: [] },
            { name: "Printed Party Shirt", price: 38.99, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80", desc: "Fun prints for parties.", reviews: [] },
            { name: "Classic Button-Down Shirt", price: 33.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", desc: "Timeless style.", reviews: [] },
            { name: "Flannel Shirt", price: 35.99, img: "https://images.unsplash.com/photo-1514995669114-d1c1b7a83a48?auto=format&fit=crop&w=400&q=80", desc: "Warm and cozy flannel.", reviews: [] },
            { name: "Oxford Shirt", price: 37.99, img: "https://images.unsplash.com/photo-1517260911205-8c6b8b6b7a5a?auto=format&fit=crop&w=400&q=80", desc: "Premium oxford fabric.", reviews: [] },
            { name: "Men's T-Shirt", price: 30, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", desc: "Classic button-down shirt.", reviews: [] },
            { name: "Men's Shorts", price: 22, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80", desc: "Casual summer shorts.", reviews: [] },
            { name: "Men's Hoodie", price: 35, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", desc: "Cozy fleece hoodie.", reviews: [] },
            { name: "Classic Cotton Polo Shirt", price: 24.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", desc: "Classic fit, breathable cotton.", reviews: [] },
            { name: "Slim Fit Denim Jeans", price: 39.99, img: "https://images.unsplash.com/photo-1514995669114-d1c1b7a83a48?auto=format&fit=crop&w=400&q=80", desc: "Modern slim fit, durable denim.", reviews: [] },
            { name: "Hooded Sweatshirt", price: 29.99, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", desc: "Soft fleece, drawstring hood.", reviews: [] },
            { name: "Leather Biker Jacket", price: 89.99, img: "https://images.unsplash.com/photo-1519340333755-c1aa5571fd46?auto=format&fit=crop&w=400&q=80", desc: "Genuine leather, classic biker style.", reviews: [] },
            { name: "Chino Shorts (Pack of 2)", price: 34.99, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80", desc: "Lightweight, perfect for summer.", reviews: [] },
            { name: "Casual Button-Up Shirt", price: 27.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", desc: "Versatile, easy to style.", reviews: [] }
        ],
        "hoodies": [
            { name: "Pullover Hoodie", price: 35.99, img: "https://source.unsplash.com/400x400/?mens-hoodie", desc: "Cozy pullover for chilly days.", reviews: [] },
            { name: "Zip-Up Hoodie", price: 37.49, img: "https://source.unsplash.com/400x400/?zip-hoodie", desc: "Easy to wear and style.", reviews: [] },
            { name: "Crewneck Sweatshirt", price: 32.99, img: "https://source.unsplash.com/400x400/?crewneck-sweatshirt", desc: "Comfortable everyday wear.", reviews: [] },
            { name: "Graphic Hoodie", price: 38.95, img: "https://source.unsplash.com/400x400/?graphic-hoodie", desc: "Trendy graphic hoodie.", reviews: [] },
            { name: "Oversized Hoodie", price: 36.00, img: "https://source.unsplash.com/400x400/?oversized-hoodie", desc: "Relaxed oversized fit.", reviews: [] },
            { name: "Athletic Hoodie", price: 34.50, img: "https://source.unsplash.com/400x400/?athletic-hoodie", desc: "Made for performance.", reviews: [] },
            { name: "Fleece Hoodie", price: 39.49, img: "https://source.unsplash.com/400x400/?fleece-hoodie", desc: "Extra soft interior.", reviews: [] },
            { name: "Vintage Style Hoodie", price: 33.79, img: "https://source.unsplash.com/400x400/?vintage-hoodie", desc: "Retro design hoodie.", reviews: [] },
            { name: "Streetwear Hoodie", price: 42.99, img: "https://source.unsplash.com/400x400/?streetwear-hoodie", desc: "Urban fashion favorite.", reviews: [] },
            { name: "Hoodie with Kangaroo Pocket", price: 36.89, img: "https://source.unsplash.com/400x400/?hoodie-pocket", desc: "Functional and stylish.", reviews: [] },
            { name: "Sleeveless Hoodie", price: 28.99, img: "https://source.unsplash.com/400x400/?sleeveless-hoodie", desc: "Workout ready.", reviews: [] },
            { name: "Embroidered Hoodie", price: 44.59, img: "https://source.unsplash.com/400x400/?embroidered-hoodie", desc: "Detailed with embroidery.", reviews: [] },
            { name: "Lightweight Hoodie", price: 31.99, img: "https://source.unsplash.com/400x400/?lightweight-hoodie", desc: "For breezy evenings.", reviews: [] },
            { name: "Tie-Dye Hoodie", price: 40.00, img: "https://source.unsplash.com/400x400/?tie-dye-hoodie", desc: "Bright and bold colors.", reviews: [] },
            { name: "Cropped Hoodie", price: 30.25, img: "https://source.unsplash.com/400x400/?cropped-hoodie", desc: "Modern cropped style.", reviews: [] }
        ],
        "sweatshirts": [
            { name: "Basic Crewneck Sweatshirt", price: 29.99, img: "https://source.unsplash.com/400x400/?crewneck-sweatshirt", desc: "Everyday comfort with a clean look.", reviews: [] },
            { name: "Oversized Sweatshirt", price: 34.49, img: "https://source.unsplash.com/400x400/?oversized-sweatshirt", desc: "Relaxed fit with premium cotton.", reviews: [] },
            { name: "Striped Sweatshirt", price: 31.25, img: "https://source.unsplash.com/400x400/?striped-sweatshirt", desc: "Casual with a sporty vibe.", reviews: [] },
            { name: "Color Block Sweatshirt", price: 32.99, img: "https://source.unsplash.com/400x400/?colorblock-sweatshirt", desc: "Trendy multi-color design.", reviews: [] },
            { name: "Graphic Print Sweatshirt", price: 35.95, img: "https://source.unsplash.com/400x400/?graphic-sweatshirt", desc: "Bold prints and soft fabric.", reviews: [] },
            { name: "Zip Neck Sweatshirt", price: 38.50, img: "https://source.unsplash.com/400x400/?zip-sweatshirt", desc: "Zipper detail adds edge.", reviews: [] },
            { name: "Mock Neck Sweatshirt", price: 36.75, img: "https://source.unsplash.com/400x400/?mockneck-sweatshirt", desc: "Warm and minimal design.", reviews: [] },
            { name: "Waffle Knit Sweatshirt", price: 39.25, img: "https://source.unsplash.com/400x400/?waffle-sweatshirt", desc: "Textured and cozy.", reviews: [] },
            { name: "Cropped Sweatshirt", price: 30.99, img: "https://source.unsplash.com/400x400/?cropped-sweatshirt", desc: "Urban cropped style.", reviews: [] },
            { name: "Tie-Dye Sweatshirt", price: 33.45, img: "https://source.unsplash.com/400x400/?tiedye-sweatshirt", desc: "Playful and vibrant colors.", reviews: [] },
            { name: "Athletic Sweatshirt", price: 37.49, img: "https://source.unsplash.com/400x400/?athletic-sweatshirt", desc: "Ideal for post-workout wear.", reviews: [] },
            { name: "Brushed Fleece Sweatshirt", price: 40.00, img: "https://source.unsplash.com/400x400/?fleece-sweatshirt", desc: "Ultra-soft and warm.", reviews: [] },
            { name: "Heavyweight Cotton Sweatshirt", price: 41.25, img: "https://source.unsplash.com/400x400/?heavy-sweatshirt", desc: "Durable and premium feel.", reviews: [] },
            { name: "Minimal Logo Sweatshirt", price: 34.95, img: "https://source.unsplash.com/400x400/?minimal-sweatshirt", desc: "Clean branding for a modern look.", reviews: [] },
            { name: "Pocket Sweatshirt", price: 36.99, img: "https://source.unsplash.com/400x400/?pocket-sweatshirt", desc: "Utility with style.", reviews: [] }
        ], 
        "sweaters": [
            { name: "Wool Cable Knit Sweater", price: 39.99, img: "https://source.unsplash.com/400x400/?wool-sweater", desc: "Warm and classic cable knit.", reviews: [] },
            { name: "Cotton Crewneck Sweater", price: 34.49, img: "https://source.unsplash.com/400x400/?crewneck-sweater", desc: "Soft cotton texture.", reviews: [] },
            { name: "Lightweight V-Neck Sweater", price: 32.00, img: "https://source.unsplash.com/400x400/?vneck-sweater", desc: "For everyday layering.", reviews: [] },
            { name: "Turtleneck Sweater", price: 38.95, img: "https://source.unsplash.com/400x400/?turtleneck", desc: "Smart winter look.", reviews: [] },
            { name: "Shawl Collar Sweater", price: 37.59, img: "https://source.unsplash.com/400x400/?shawl-collar", desc: "Elegant design.", reviews: [] },
            { name: "Zipper Cardigan", price: 40.99, img: "https://source.unsplash.com/400x400/?zip-cardigan", desc: "Open or closed style.", reviews: [] },
            { name: "Chunky Knit Sweater", price: 42.79, img: "https://source.unsplash.com/400x400/?chunky-sweater", desc: "Heavy knit warmth.", reviews: [] },
            { name: "Slim Fit Pullover", price: 33.45, img: "https://source.unsplash.com/400x400/?slim-sweater", desc: "Clean and minimal.", reviews: [] },
            { name: "Patterned Sweater", price: 36.29, img: "https://source.unsplash.com/400x400/?patterned-sweater", desc: "Stylish knit pattern.", reviews: [] },
            { name: "Ribbed Sweater", price: 31.95, img: "https://source.unsplash.com/400x400/?ribbed-knit", desc: "Stretch ribbed texture.", reviews: [] },
            { name: "Button-Up Cardigan", price: 35.75, img: "https://source.unsplash.com/400x400/?cardigan", desc: "Layer up with ease.", reviews: [] },
            { name: "Striped Sweater", price: 30.59, img: "https://source.unsplash.com/400x400/?striped-sweater", desc: "Adds color and flair.", reviews: [] },
            { name: "Knit Crew Sweater", price: 29.99, img: "https://source.unsplash.com/400x400/?knitwear", desc: "Simple yet elegant.", reviews: [] },
            { name: "Cable Turtleneck", price: 41.25, img: "https://source.unsplash.com/400x400/?cable-knit", desc: "Textured classic.", reviews: [] },
            { name: "Cropped Sweater", price: 27.49, img: "https://source.unsplash.com/400x400/?cropped-sweater", desc: "Modern cropped style.", reviews: [] }
        ],
        "Jackets": [
            { name: "Classic Denim Jacket", price: 49.99, img: "https://source.unsplash.com/400x400/?denim-jacket", desc: "Timeless denim style for all seasons.", reviews: [] },
            { name: "Bomber Jacket", price: 59.49, img: "https://source.unsplash.com/400x400/?bomber-jacket", desc: "Streetwear essential with a snug fit.", reviews: [] },
            { name: "Lightweight Windbreaker", price: 44.99, img: "https://source.unsplash.com/400x400/?windbreaker", desc: "Great for windy and rainy days.", reviews: [] },
            { name: "Trench Coat", price: 74.95, img: "https://source.unsplash.com/400x400/?trench-coat", desc: "Sophisticated layering for formal looks.", reviews: [] },
            { name: "Hooded Puffer Jacket", price: 69.00, img: "https://source.unsplash.com/400x400/?puffer-jacket", desc: "Ultimate warmth with style.", reviews: [] },
            { name: "Suede Jacket", price: 79.99, img: "https://source.unsplash.com/400x400/?suede-jacket", desc: "Luxurious texture and look.", reviews: [] },
            { name: "Faux Leather Biker Jacket", price: 64.99, img: "https://source.unsplash.com/400x400/?biker-jacket", desc: "Edgy and fashionable choice.", reviews: [] },
            { name: "Field Jacket", price: 59.00, img: "https://source.unsplash.com/400x400/?field-jacket", desc: "Military-inspired with extra pockets.", reviews: [] },
            { name: "Wool Overcoat", price: 84.95, img: "https://source.unsplash.com/400x400/?wool-coat", desc: "Ideal for winter layering.", reviews: [] },
            { name: "Parka with Fur Hood", price: 89.99, img: "https://source.unsplash.com/400x400/?parka", desc: "Functional and cozy for snow.", reviews: [] },
            { name: "Canvas Utility Jacket", price: 54.99, img: "https://source.unsplash.com/400x400/?canvas-jacket", desc: "Rugged design for daily wear.", reviews: [] },
            { name: "Fleece Lined Jacket", price: 66.25, img: "https://source.unsplash.com/400x400/?fleece-jacket", desc: "Extra insulation for cold days.", reviews: [] },
            { name: "Harrington Jacket", price: 57.49, img: "https://source.unsplash.com/400x400/?harrington-jacket", desc: "Classic British-inspired outerwear.", reviews: [] },
            { name: "Rain Jacket", price: 46.95, img: "https://source.unsplash.com/400x400/?rain-jacket", desc: "Waterproof and breathable.", reviews: [] },
            { name: "Quilted Jacket", price: 63.75, img: "https://source.unsplash.com/400x400/?quilted-jacket", desc: "Warmth and texture in one.", reviews: [] }
        ],
        "jeans": [
            { name: "Slim Fit Jeans", price: 39.99, img: "https://source.unsplash.com/400x400/?slim-jeans", desc: "Tailored, modern look.", reviews: [] },
            { name: "Straight Fit Jeans", price: 37.49, img: "https://source.unsplash.com/400x400/?straight-jeans", desc: "Classic straight cut.", reviews: [] },
            { name: "Distressed Denim", price: 44.00, img: "https://source.unsplash.com/400x400/?distressed-jeans", desc: "Trendy and edgy.", reviews: [] },
            { name: "Tapered Fit Jeans", price: 38.95, img: "https://source.unsplash.com/400x400/?tapered-jeans", desc: "Fitted at ankle.", reviews: [] },
            { name: "Bootcut Jeans", price: 40.29, img: "https://source.unsplash.com/400x400/?bootcut-jeans", desc: "Flared boot cut.", reviews: [] },
            { name: "Relaxed Fit Jeans", price: 36.79, img: "https://source.unsplash.com/400x400/?relaxed-jeans", desc: "Comfort fit for daily wear.", reviews: [] },
            { name: "Dark Wash Jeans", price: 39.59, img: "https://source.unsplash.com/400x400/?dark-jeans", desc: "Refined and polished.", reviews: [] },
            { name: "Light Wash Jeans", price: 35.99, img: "https://source.unsplash.com/400x400/?light-jeans", desc: "Casual and cool.", reviews: [] },
            { name: "Stonewashed Jeans", price: 34.49, img: "https://source.unsplash.com/400x400/?stonewash-jeans", desc: "Vintage finish.", reviews: [] },
            { name: "Low Rise Jeans", price: 36.89, img: "https://source.unsplash.com/400x400/?lowrise-jeans", desc: "Sits at hips.", reviews: [] },
            { name: "High Rise Jeans", price: 38.29, img: "https://source.unsplash.com/400x400/?highwaist-jeans", desc: "For a taller silhouette.", reviews: [] },
            { name: "Cropped Denim", price: 33.45, img: "https://source.unsplash.com/400x400/?cropped-jeans", desc: "Modern ankle length.", reviews: [] },
            { name: "Vintage Fit Jeans", price: 40.25, img: "https://source.unsplash.com/400x400/?vintage-jeans", desc: "Retro inspired fit.", reviews: [] },
            { name: "Patchwork Jeans", price: 42.49, img: "https://source.unsplash.com/400x400/?patch-jeans", desc: "Artistic and fun.", reviews: [] },
            { name: "Ripped Skinny Jeans", price: 43.99, img: "https://source.unsplash.com/400x400/?ripped-jeans", desc: "Urban and edgy.", reviews: [] }
        ],
        "trousers": [
            { name: "Slim Fit Chinos", price: 39.99, img: "https://source.unsplash.com/400x400/?mens-chinos", desc: "Smart slim fit chinos for work or play.", reviews: [] },
            { name: "Classic Flat Front Trousers", price: 42.00, img: "https://source.unsplash.com/400x400/?mens-trousers", desc: "Perfect for formal settings.", reviews: [] },
            { name: "Stretch Cotton Chinos", price: 36.95, img: "https://source.unsplash.com/400x400/?cotton-chinos", desc: "Flexible and breathable.", reviews: [] },
            { name: "Tailored Wool Trousers", price: 58.75, img: "https://source.unsplash.com/400x400/?wool-trousers", desc: "Premium wool blend for office wear.", reviews: [] },
            { name: "Pleated Dress Pants", price: 44.90, img: "https://source.unsplash.com/400x400/?pleated-trousers", desc: "Classic pleats for a refined look.", reviews: [] },
            { name: "Cropped Chinos", price: 37.49, img: "https://source.unsplash.com/400x400/?cropped-chinos", desc: "Ankle length modern style.", reviews: [] },
            { name: "Tapered Fit Trousers", price: 39.29, img: "https://source.unsplash.com/400x400/?tapered-trousers", desc: "Tapered silhouette and clean look.", reviews: [] },
            { name: "Textured Linen Trousers", price: 49.99, img: "https://source.unsplash.com/400x400/?linen-trousers", desc: "Lightweight summer essential.", reviews: [] },
            { name: "Checked Formal Trousers", price: 45.95, img: "https://source.unsplash.com/400x400/?check-trousers", desc: "Subtle pattern for work or events.", reviews: [] },
            { name: "High-Waisted Pants", price: 41.25, img: "https://source.unsplash.com/400x400/?highwaist-pants", desc: "Retro-inspired high rise.", reviews: [] },
            { name: "Wrinkle-Free Trousers", price: 43.75, img: "https://source.unsplash.com/400x400/?wrinklefree-trousers", desc: "Ideal for travel and daily use.", reviews: [] },
            { name: "Drawstring Chinos", price: 34.95, img: "https://source.unsplash.com/400x400/?drawstring-trousers", desc: "Casual yet tailored look.", reviews: [] },
            { name: "Slim Tech Work Pants", price: 46.89, img: "https://source.unsplash.com/400x400/?tech-pants", desc: "Moisture-wicking & stretch tech.", reviews: [] },
            { name: "Cargo Style Trousers", price: 38.50, img: "https://source.unsplash.com/400x400/?cargo-trousers", desc: "Modern utility style.", reviews: [] },
            { name: "Skinny Fit Pants", price: 40.99, img: "https://source.unsplash.com/400x400/?skinny-trousers", desc: "Bold, fitted and trendy.", reviews: [] }
        ],
        "shorts": [
            { name: "Casual Cotton Shorts", price: 24.99, img: "https://source.unsplash.com/400x400/?mens-cotton-shorts", desc: "Everyday summer staple.", reviews: [] },
            { name: "Denim Shorts", price: 29.49, img: "https://source.unsplash.com/400x400/?denim-shorts", desc: "Rugged and relaxed.", reviews: [] },
            { name: "Slim Fit Chino Shorts", price: 26.95, img: "https://source.unsplash.com/400x400/?chino-shorts", desc: "Clean lines and tailored fit.", reviews: [] },
            { name: "Athletic Mesh Shorts", price: 22.00, img: "https://source.unsplash.com/400x400/?mesh-shorts", desc: "Breathable for workouts.", reviews: [] },
            { name: "Printed Beach Shorts", price: 27.25, img: "https://source.unsplash.com/400x400/?beach-shorts", desc: "Fun prints for vacations.", reviews: [] },
            { name: "Cargo Utility Shorts", price: 28.99, img: "https://source.unsplash.com/400x400/?cargo-shorts", desc: "Multiple pockets and rugged use.", reviews: [] },
            { name: "Linen Relaxed Shorts", price: 25.50, img: "https://source.unsplash.com/400x400/?linen-shorts", desc: "Lightweight summer favorite.", reviews: [] },
            { name: "Drawstring Shorts", price: 23.45, img: "https://source.unsplash.com/400x400/?drawstring-shorts", desc: "Easy comfort all day.", reviews: [] },
            { name: "Knee-Length Shorts", price: 26.99, img: "https://source.unsplash.com/400x400/?knee-length-shorts", desc: "Modest and stylish.", reviews: [] },
            { name: "Sweat Shorts", price: 24.29, img: "https://source.unsplash.com/400x400/?sweat-shorts", desc: "Made for lounging and movement.", reviews: [] },
            { name: "Cut-Off Denim Shorts", price: 30.00, img: "https://source.unsplash.com/400x400/?cutoff-shorts", desc: "Edgy street style.", reviews: [] },
            { name: "High-Rise Shorts", price: 27.99, img: "https://source.unsplash.com/400x400/?highrise-shorts", desc: "Modern silhouette with comfort.", reviews: [] },
            { name: "Two-in-One Training Shorts", price: 32.95, img: "https://source.unsplash.com/400x400/?training-shorts", desc: "Compression lining for gym.", reviews: [] },
            { name: "Striped Jersey Shorts", price: 21.50, img: "https://source.unsplash.com/400x400/?jersey-shorts", desc: "Soft and breathable fabric.", reviews: [] },
            { name: "Smart Casual Shorts", price: 28.75, img: "https://source.unsplash.com/400x400/?smart-shorts", desc: "For casual evenings out.", reviews: [] }
        ],
        "joggers": [
            { name: "Basic Jogger Sweatpants", price: 29.99, img: "https://source.unsplash.com/400x400/?joggers", desc: "Comfy and versatile for daily wear.", reviews: [] },
            { name: "Slim Fit Joggers", price: 34.99, img: "https://source.unsplash.com/400x400/?slim-joggers", desc: "Modern tapered fit.", reviews: [] },
            { name: "Fleece Joggers", price: 32.45, img: "https://source.unsplash.com/400x400/?fleece-joggers", desc: "Ultra-soft interior fleece lining.", reviews: [] },
            { name: "Athletic Performance Joggers", price: 37.95, img: "https://source.unsplash.com/400x400/?performance-joggers", desc: "Stretch and sweat-wicking.", reviews: [] },
            { name: "Cargo Pocket Joggers", price: 36.00, img: "https://source.unsplash.com/400x400/?cargo-joggers", desc: "Utility and comfort.", reviews: [] },
            { name: "Cotton Lounge Joggers", price: 31.49, img: "https://source.unsplash.com/400x400/?cotton-joggers", desc: "Ideal for chilling at home.", reviews: [] },
            { name: "Cuffed Ankle Joggers", price: 30.89, img: "https://source.unsplash.com/400x400/?ankle-joggers", desc: "Sporty cuff design.", reviews: [] },
            { name: "Track Joggers", price: 35.25, img: "https://source.unsplash.com/400x400/?track-pants", desc: "Bold stripes and side zips.", reviews: [] },
            { name: "Terry Knit Joggers", price: 33.59, img: "https://source.unsplash.com/400x400/?terry-joggers", desc: "Smooth touch with stretch.", reviews: [] },
            { name: "Heather Grey Joggers", price: 28.99, img: "https://source.unsplash.com/400x400/?grey-joggers", desc: "A wardrobe basic.", reviews: [] },
            { name: "Urban Tech Joggers", price: 39.49, img: "https://source.unsplash.com/400x400/?urban-joggers", desc: "City-ready utility style.", reviews: [] },
            { name: "Loose Fit Joggers", price: 29.95, img: "https://source.unsplash.com/400x400/?loose-joggers", desc: "Roomy for full comfort.", reviews: [] },
            { name: "Double Layer Joggers", price: 42.00, img: "https://source.unsplash.com/400x400/?layered-joggers", desc: "Double fabric warmth.", reviews: [] },
            { name: "Drawstring Joggers", price: 31.75, img: "https://source.unsplash.com/400x400/?drawstring-joggers", desc: "Secure fit and style.", reviews: [] },
            { name: "Windproof Joggers", price: 38.59, img: "https://source.unsplash.com/400x400/?windproof-joggers", desc: "Protection from elements.", reviews: [] }
        ],
        "coats": [
            { name: "Wool Overcoat", price: 119.99, img: "https://example.com/coat1.jpg", desc: "Classic winter overcoat.", reviews: [] },
            { name: "Trench Coat", price: 129.50, img: "https://example.com/coat2.jpg", desc: "Stylish rain protection.", reviews: [] },
            { name: "Peacoat", price: 109.99, img: "https://example.com/coat3.jpg", desc: "Navy-style wool peacoat.", reviews: [] },
            { name: "Faux Leather Coat", price: 89.99, img: "https://example.com/coat4.jpg", desc: "Edgy faux leather design.", reviews: [] },
            { name: "Parka Jacket Coat", price: 99.50, img: "https://example.com/coat5.jpg", desc: "Warm and weatherproof.", reviews: [] },
            { name: "Longline Coat", price: 134.99, img: "https://example.com/coat6.jpg", desc: "Modern longline wool coat.", reviews: [] },
            { name: "Camel Overcoat", price: 129.00, img: "https://example.com/coat7.jpg", desc: "Elegant camel color.", reviews: [] },
            { name: "Checkered Coat", price: 114.75, img: "https://example.com/coat8.jpg", desc: "Smart check pattern.", reviews: [] },
            { name: "Zippered Winter Coat", price: 99.99, img: "https://example.com/coat9.jpg", desc: "Sporty zip-up style.", reviews: [] },
            { name: "Quilted Coat", price: 89.50, img: "https://example.com/coat10.jpg", desc: "Insulated quilted texture.", reviews: [] }
        ],
        
        "blazers": [
            { name: "Slim Fit Blazer", price: 99.99, img: "https://example.com/blazer1.jpg", desc: "Perfect for formal events.", reviews: [] },
            { name: "Casual Cotton Blazer", price: 79.99, img: "https://example.com/blazer2.jpg", desc: "Smart-casual look.", reviews: [] },
            { name: "Classic Black Blazer", price: 109.99, img: "https://example.com/blazer3.jpg", desc: "Timeless black for every occasion.", reviews: [] },
            { name: "Textured Grey Blazer", price: 89.50, img: "https://example.com/blazer4.jpg", desc: "Modern textured finish.", reviews: [] },
            { name: "Navy Formal Blazer", price: 95.00, img: "https://example.com/blazer5.jpg", desc: "Office and wedding-ready.", reviews: [] },
            { name: "Double-Breasted Blazer", price: 119.25, img: "https://example.com/blazer6.jpg", desc: "Chic double-button design.", reviews: [] },
            { name: "Velvet Blazer", price: 129.99, img: "https://example.com/blazer7.jpg", desc: "Rich velvet for festive looks.", reviews: [] },
            { name: "Checkered Blazer", price: 92.49, img: "https://example.com/blazer8.jpg", desc: "Sophisticated pattern styling.", reviews: [] },
            { name: "Linen Summer Blazer", price: 74.95, img: "https://example.com/blazer9.jpg", desc: "Lightweight summer fabric.", reviews: [] },
            { name: "Beige Smart Blazer", price: 88.75, img: "https://example.com/blazer10.jpg", desc: "Neutral tones for versatility.", reviews: [] }
        ],
        
        "kurtas": [
            { name: "Printed Cotton Kurta", price: 24.99, img: "https://example.com/kurta1.jpg", desc: "Comfortable traditional wear.", reviews: [] },
            { name: "Embroidered Festive Kurta", price: 39.99, img: "https://example.com/kurta2.jpg", desc: "Elegant festive attire.", reviews: [] },
            { name: "Plain White Kurta", price: 22.00, img: "https://example.com/kurta3.jpg", desc: "Simple and elegant.", reviews: [] },
            { name: "Pathani Style Kurta", price: 34.50, img: "https://example.com/kurta4.jpg", desc: "Classic Pathani cut.", reviews: [] },
            { name: "Asymmetric Hem Kurta", price: 28.99, img: "https://example.com/kurta5.jpg", desc: "Trendy asymmetric design.", reviews: [] },
            { name: "Short Kurta for Men", price: 19.99, img: "https://example.com/kurta6.jpg", desc: "Goes well with jeans.", reviews: [] },
            { name: "Mandarin Collar Kurta", price: 31.25, img: "https://example.com/kurta7.jpg", desc: "Stylish collar variation.", reviews: [] },
            { name: "Festive Silk Kurta", price: 42.75, img: "https://example.com/kurta8.jpg", desc: "Silk blend for occasion wear.", reviews: [] },
            { name: "Layered Kurta Set", price: 49.00, img: "https://example.com/kurta9.jpg", desc: "Layered with inner vest.", reviews: [] },
            { name: "Designer Kurta with Jacket", price: 59.99, img: "https://example.com/kurta10.jpg", desc: "Comes with Nehru jacket.", reviews: [] }
        ],
        "undergarments": [
            { name: "Cotton Boxer Shorts (Pack of 3)", price: 18.99, img: "https://source.unsplash.com/400x400/?mens-boxers", desc: "Soft breathable cotton fabric.", reviews: [] },
            { name: "Briefs (Pack of 3)", price: 17.49, img: "https://source.unsplash.com/400x400/?mens-briefs", desc: "Supportive and comfortable everyday briefs.", reviews: [] },
            { name: "Stretch Trunks", price: 19.99, img: "https://source.unsplash.com/400x400/?mens-trunks", desc: "Elastic waistband and modern fit.", reviews: [] },
            { name: "Modal Fabric Boxer Briefs", price: 21.95, img: "https://source.unsplash.com/400x400/?boxer-briefs", desc: "Ultra-soft and odor resistant.", reviews: [] },
            { name: "Performance Briefs", price: 23.00, img: "https://source.unsplash.com/400x400/?athletic-briefs", desc: "Moisture-wicking for workouts.", reviews: [] },
            { name: "Low-Rise Trunks", price: 20.49, img: "https://source.unsplash.com/400x400/?lowrise-trunks", desc: "Trendy silhouette with snug comfort.", reviews: [] },
            { name: "Seamless Boxers", price: 22.50, img: "https://source.unsplash.com/400x400/?seamless-underwear", desc: "No chafe, no ride-up.", reviews: [] },
            { name: "Mesh Briefs", price: 24.95, img: "https://source.unsplash.com/400x400/?mesh-briefs", desc: "Breathable mesh panels.", reviews: [] },
            { name: "Classic White Briefs", price: 16.25, img: "https://source.unsplash.com/400x400/?white-briefs", desc: "Everyday go-to underwear.", reviews: [] },
            { name: "Trunks with Logo Waistband", price: 21.00, img: "https://source.unsplash.com/400x400/?logo-trunks", desc: "Stylish branded waistband.", reviews: [] },
            { name: "Antimicrobial Underwear", price: 25.49, img: "https://source.unsplash.com/400x400/?odor-resistant-underwear", desc: "Stay fresh all day.", reviews: [] },
            { name: "Boxer Briefs with Fly", price: 19.75, img: "https://source.unsplash.com/400x400/?boxer-fly", desc: "Functional and classic.", reviews: [] },
            { name: "Colored Boxer Pack", price: 22.99, img: "https://source.unsplash.com/400x400/?colorful-boxers", desc: "Vibrant everyday variety.", reviews: [] },
            { name: "Thermal Underwear", price: 29.99, img: "https://source.unsplash.com/400x400/?thermal-underwear", desc: "Winter warmth under clothing.", reviews: [] },
            { name: "Organic Cotton Briefs", price: 26.50, img: "https://source.unsplash.com/400x400/?organic-briefs", desc: "Eco-friendly softness.", reviews: [] }
        ],
        "loungewear": [
            { name: "Cotton Lounge Pants", price: 26.99, img: "https://source.unsplash.com/400x400/?mens-lounge-pants", desc: "Comfy for evenings and weekends.", reviews: [] },
            { name: "Full Sleeve Pajama Set", price: 34.49, img: "https://source.unsplash.com/400x400/?mens-pajamas", desc: "Matching top and bottom set.", reviews: [] },
            { name: "Striped Lounge Set", price: 37.00, img: "https://source.unsplash.com/400x400/?striped-pajamas", desc: "Stylish home wear combo.", reviews: [] },
            { name: "Cotton Night Shorts", price: 24.50, img: "https://source.unsplash.com/400x400/?sleep-shorts", desc: "Lightweight and breathable.", reviews: [] },
            { name: "Checked Pajama Bottoms", price: 28.75, img: "https://source.unsplash.com/400x400/?checked-pajamas", desc: "Classic sleepwear essential.", reviews: [] },
            { name: "Jogger-Style Lounge Pants", price: 29.99, img: "https://source.unsplash.com/400x400/?jogger-pajamas", desc: "Modern and stretchy.", reviews: [] },
            { name: "Hooded Sleep Top", price: 32.25, img: "https://source.unsplash.com/400x400/?hooded-loungewear", desc: "Extra cozy and soft.", reviews: [] },
            { name: "Modal Sleepwear Set", price: 36.95, img: "https://source.unsplash.com/400x400/?modal-sleepwear", desc: "Smooth and cooling fabric.", reviews: [] },
            { name: "Sleeveless Pajama Tank Set", price: 30.00, img: "https://source.unsplash.com/400x400/?tank-pajama", desc: "Easy to move and sleep in.", reviews: [] },
            { name: "Brushed Cotton Pajamas", price: 33.50, img: "https://source.unsplash.com/400x400/?brushed-pajamas", desc: "Flannel-like softness.", reviews: [] },
            { name: "Waffle Knit Pajama Pants", price: 31.75, img: "https://source.unsplash.com/400x400/?waffle-loungewear", desc: "Textured and comfy.", reviews: [] },
            { name: "Thermal Lounge Set", price: 39.99, img: "https://source.unsplash.com/400x400/?thermal-pajamas", desc: "Ideal for colder nights.", reviews: [] },
            { name: "Relaxed Fit Cotton Top", price: 23.49, img: "https://source.unsplash.com/400x400/?relaxed-top", desc: "Can double as casual wear.", reviews: [] },
            { name: "Drawstring Lounge Shorts", price: 25.00, img: "https://source.unsplash.com/400x400/?lounge-shorts", desc: "Sleep or Netflix in comfort.", reviews: [] },
            { name: "Printed Nightwear Set", price: 35.95, img: "https://source.unsplash.com/400x400/?printed-pajamas", desc: "Fun patterns for bedtime.", reviews: [] }
        ],
        "tankTops": [
            { name: "Basic Cotton Tank Top", price: 15.99, img: "https://source.unsplash.com/400x400/?mens-tanktop", desc: "Ideal for layering or workouts.", reviews: [] },
            { name: "Athletic Performance Tank", price: 18.49, img: "https://source.unsplash.com/400x400/?workout-tank", desc: "Quick-dry and breathable.", reviews: [] },
            { name: "Sleeveless Muscle Tee", price: 17.75, img: "https://source.unsplash.com/400x400/?muscle-tee", desc: "Show off those gains!", reviews: [] },
            { name: "Printed Graphic Tank", price: 19.00, img: "https://source.unsplash.com/400x400/?graphic-tank", desc: "Trendy designs and comfort.", reviews: [] },
            { name: "Stretch Fit Tank", price: 16.25, img: "https://source.unsplash.com/400x400/?stretch-tank", desc: "Moves with your body.", reviews: [] },
            { name: "Organic Cotton Sleeveless Tee", price: 18.99, img: "https://source.unsplash.com/400x400/?eco-tank", desc: "Sustainable and soft.", reviews: [] },
            { name: "Striped Tank Top", price: 17.49, img: "https://source.unsplash.com/400x400/?striped-tank", desc: "Classic summer pattern.", reviews: [] },
            { name: "Loose Fit Gym Tank", price: 20.00, img: "https://source.unsplash.com/400x400/?loose-tank", desc: "Relaxed workout wear.", reviews: [] },
            { name: "Cut-Off Sleeveless Tee", price: 19.50, img: "https://source.unsplash.com/400x400/?cutoff-tank", desc: "Edgy and cool look.", reviews: [] },
            { name: "Ribbed Tank Top", price: 16.75, img: "https://source.unsplash.com/400x400/?ribbed-tank", desc: "Fitted texture and support.", reviews: [] },
            { name: "Modal Fabric Tank", price: 21.25, img: "https://source.unsplash.com/400x400/?modal-tank", desc: "Cool touch and light feel.", reviews: [] },
            { name: "Dual Layer Training Tank", price: 22.99, img: "https://source.unsplash.com/400x400/?dual-layer-tank", desc: "Built for intensity.", reviews: [] },
            { name: "Yoga Tank Top", price: 18.25, img: "https://source.unsplash.com/400x400/?yoga-tank", desc: "Stretchy and breathable.", reviews: [] },
            { name: "Contrast Stitch Tank", price: 19.99, img: "https://source.unsplash.com/400x400/?contrast-tank", desc: "Pop of color at the seams.", reviews: [] },
            { name: "Hooded Sleeveless Tank", price: 23.75, img: "https://source.unsplash.com/400x400/?hooded-tank", desc: "Street-style muscle hoodie.", reviews: [] }
        ],  
        "footwear": [
            { name: "Classic White Sneakers", price: 49.99, img: "https://source.unsplash.com/400x400/?white-sneakers", desc: "Versatile and stylish for daily wear.", reviews: [] },
            { name: "Running Shoes", price: 59.95, img: "https://source.unsplash.com/400x400/?running-shoes", desc: "Built for performance and comfort.", reviews: [] },
            { name: "Slip-On Loafers", price: 44.50, img: "https://source.unsplash.com/400x400/?mens-loafers", desc: "Easy to wear and sleek.", reviews: [] },
            { name: "Formal Leather Shoes", price: 69.99, img: "https://source.unsplash.com/400x400/?formal-shoes", desc: "Essential for business and events.", reviews: [] },
            { name: "Canvas Sneakers", price: 39.00, img: "https://source.unsplash.com/400x400/?canvas-shoes", desc: "Casual and breathable design.", reviews: [] },
            { name: "Brogue Dress Shoes", price: 75.00, img: "https://source.unsplash.com/400x400/?brogue-shoes", desc: "Detailed and classy.", reviews: [] },
            { name: "High-Top Sneakers", price: 52.49, img: "https://source.unsplash.com/400x400/?high-top-sneakers", desc: "Street-style essential.", reviews: [] },
            { name: "Suede Loafers", price: 65.99, img: "https://source.unsplash.com/400x400/?suede-loafers", desc: "Soft-touch and elegant.", reviews: [] },
            { name: "Leather Sandals", price: 35.25, img: "https://source.unsplash.com/400x400/?leather-sandals", desc: "Comfortable open footwear.", reviews: [] },
            { name: "Flip-Flops", price: 19.99, img: "https://source.unsplash.com/400x400/?flip-flops", desc: "Perfect for beaches and casual wear.", reviews: [] },
            { name: "Chelsea Boots", price: 79.00, img: "https://source.unsplash.com/400x400/?chelsea-boots", desc: "Modern and minimal design.", reviews: [] },
            { name: "Espadrilles", price: 42.49, img: "https://source.unsplash.com/400x400/?mens-espadrilles", desc: "Breathable and lightweight.", reviews: [] },
            { name: "Hiking Boots", price: 84.99, img: "https://source.unsplash.com/400x400/?hiking-boots", desc: "Built for trails and tough terrain.", reviews: [] },
            { name: "Slip-On Slippers", price: 25.00, img: "https://source.unsplash.com/400x400/?mens-slippers", desc: "Relaxed footwear for home.", reviews: [] },
            { name: "Monk Strap Formal Shoes", price: 72.00, img: "https://source.unsplash.com/400x400/?monkstrap-shoes", desc: "Polished and distinguished.", reviews: [] },
            { name: "Training Gym Shoes", price: 58.99, img: "https://source.unsplash.com/400x400/?gym-shoes", desc: "Supportive sole and breathable mesh.", reviews: [] },
            { name: "Slip-On Casual Sneakers", price: 42.50, img: "https://source.unsplash.com/400x400/?slip-on-sneakers", desc: "Easy fit and minimalist style.", reviews: [] },
            { name: "Retro Running Sneakers", price: 64.99, img: "https://source.unsplash.com/400x400/?retro-sneakers", desc: "Old-school vibes, modern comfort.", reviews: [] },
            { name: "Combat Boots", price: 82.00, img: "https://source.unsplash.com/400x400/?combat-boots", desc: "Military-inspired rugged wear.", reviews: [] },
            { name: "Trail Running Shoes", price: 69.00, img: "https://source.unsplash.com/400x400/?trail-shoes", desc: "Grippy outsole for outdoor paths.", reviews: [] },
            { name: "Suede Chukka Boots", price: 74.95, img: "https://source.unsplash.com/400x400/?chukka-boots", desc: "Smart casual styling.", reviews: [] },
            { name: "Waterproof Hiking Shoes", price: 89.99, img: "https://source.unsplash.com/400x400/?waterproof-hiking", desc: "Built for wet trails and rocky terrain.", reviews: [] },
            { name: "Moccasin Loafers", price: 49.00, img: "https://source.unsplash.com/400x400/?moccasin-loafers", desc: "Classic slip-ons with soft sole.", reviews: [] },
            { name: "Velcro Strap Sandals", price: 34.99, img: "https://source.unsplash.com/400x400/?velcro-sandals", desc: "Comfort meets functionality.", reviews: [] },
            { name: "Knitted Sneakers", price: 54.75, img: "https://source.unsplash.com/400x400/?knit-sneakers", desc: "Sock-like fit and modern design.", reviews: [] },
            { name: "Luxury Dress Shoes", price: 109.99, img: "https://source.unsplash.com/400x400/?luxury-formal-shoes", desc: "Premium leather craftsmanship.", reviews: [] },
            { name: "Beach Flip-Flops", price: 15.99, img: "https://source.unsplash.com/400x400/?beach-flipflops", desc: "Water-friendly and light.", reviews: [] },
            { name: "Skateboarding Sneakers", price: 47.50, img: "https://source.unsplash.com/400x400/?skate-shoes", desc: "Durable grip and street style.", reviews: [] },
            { name: "Trail Sandals", price: 39.95, img: "https://source.unsplash.com/400x400/?hiking-sandals", desc: "Outdoor sandals with rugged grip.", reviews: [] },
            { name: "Minimalist Barefoot Shoes", price: 62.49, img: "https://source.unsplash.com/400x400/?barefoot-shoes", desc: "Natural movement and foot feel.", reviews: [] }
        ],
        "accessories": [
            { name: "Leather Belt", price: 24.99, img: "https://source.unsplash.com/400x400/?mens-belt", desc: "Durable leather with polished buckle.", reviews: [] },
            { name: "Baseball Cap", price: 15.99, img: "https://source.unsplash.com/400x400/?mens-cap", desc: "Casual styling and sun protection.", reviews: [] },
            { name: "Aviator Sunglasses", price: 34.99, img: "https://source.unsplash.com/400x400/?aviator-sunglasses", desc: "Classic metal frame design.", reviews: [] },
            { name: "Digital Watch", price: 49.99, img: "https://source.unsplash.com/400x400/?digital-watch", desc: "Sporty and multifunctional.", reviews: [] },
            { name: "Leather Strap Watch", price: 59.50, img: "https://source.unsplash.com/400x400/?leather-watch", desc: "Timeless wristwear with class.", reviews: [] },
            { name: "Woven Fabric Belt", price: 19.95, img: "https://source.unsplash.com/400x400/?fabric-belt", desc: "Casual and adjustable.", reviews: [] },
            { name: "Round Sunglasses", price: 29.99, img: "https://source.unsplash.com/400x400/?round-sunglasses", desc: "Retro summer vibe.", reviews: [] },
            { name: "Wristband Wallet", price: 14.99, img: "https://source.unsplash.com/400x400/?wrist-wallet", desc: "Keep essentials secure on the go.", reviews: [] },
            { name: "Fedora Hat", price: 22.75, img: "https://source.unsplash.com/400x400/?fedora-hat", desc: "Add flair to your outfit.", reviews: [] },
            { name: "Wool Beanie", price: 16.00, img: "https://source.unsplash.com/400x400/?beanie", desc: "Winter-ready and warm.", reviews: [] },
            { name: "Bracelet Set", price: 13.49, img: "https://source.unsplash.com/400x400/?mens-bracelet", desc: "Layered accessories for style.", reviews: [] },
            { name: "Canvas Tote Bag", price: 27.00, img: "https://source.unsplash.com/400x400/?canvas-bag", desc: "Functional carry-on bag.", reviews: [] },
            { name: "Wool Scarf", price: 28.49, img: "https://source.unsplash.com/400x400/?wool-scarf", desc: "Soft, cozy and elegant.", reviews: [] },
            { name: "Leather Keychain", price: 9.99, img: "https://source.unsplash.com/400x400/?leather-keychain", desc: "Simple and rugged charm.", reviews: [] },
            { name: "Travel Toiletry Bag", price: 21.95, img: "https://source.unsplash.com/400x400/?toiletry-bag", desc: "Organized for on-the-go grooming.", reviews: [] }
        ],   
      },
    womens: {
            "tshirts": [
                { name: "Basic White Tee", price: 22.99, img: "https://source.unsplash.com/400x400/?women-tshirt", desc: "Soft everyday essential.", reviews: [] },
                { name: "V‑Neck Graphic Tee", price: 24.49, img: "https://source.unsplash.com/400x400/?graphic-tee", desc: "Casual statement tee.", reviews: [] },
                { name: "Cropped Logo Tee", price: 23.75, img: "https://source.unsplash.com/400x400/?cropped-tee", desc: "Trendy crop style.", reviews: [] },
                { name: "Striped Tee", price: 21.99, img: "https://source.unsplash.com/400x400/?striped-tee", desc: "Classic nautical stripes.", reviews: [] },
                { name: "Oversized Slouchy Tee", price: 26.49, img: "https://source.unsplash.com/400x400/?oversized-tee", desc: "Relaxed boxy fit.", reviews: [] },
                { name: "Ribbed Crop Tee", price: 21.99, img: "https://source.unsplash.com/400x400/?ribbed-tee", desc: "Textured and fitted.", reviews: [] },
                { name: "Graphic Band Tee", price: 24.99, img: "https://source.unsplash.com/400x400/?band-tee", desc: "Vintage music print.", reviews: [] },
                { name: "V‑Neck Linen Tee", price: 23.49, img: "https://source.unsplash.com/400x400/?linen-tee", desc: "Lightweight summer material.", reviews: [] },
                { name: "Tie‑Dye Tee", price: 25.75, img: "https://source.unsplash.com/400x400/?tiedye-tee", desc: "Bold and colorful.", reviews: [] },
                { name: "Pocket Tee", price: 22.25, img: "https://source.unsplash.com/400x400/?pocket-tee", desc: "Everyday comfort.", reviews: [] },
                { name: "Long Sleeve Basic Tee", price: 24.99, img: "https://source.unsplash.com/400x400/?longsleeve-tee", desc: "Lightweight layering option.", reviews: [] },
                { name: "Crop Slogan Tee", price: 23.50, img: "https://source.unsplash.com/400x400/?slogan-tee", desc: "Playful printed crop.", reviews: [] },
                { name: "Modal Long Tee", price: 27.00, img: "https://source.unsplash.com/400x400/?modal-tee", desc: "Soft and silky feel.", reviews: [] },
                { name: "Cap Sleeve Tee", price: 22.75, img: "https://source.unsplash.com/400x400/?capsleeve-tee", desc: "Feminine cap sleeves.", reviews: [] },
                { name: "High‑Low Hem Tee", price: 23.99, img: "https://source.unsplash.com/400x400/?highlow-tee", desc: "Casual with style.", reviews: [] }
            ],
          
            "blouses": [
                { name: "Silk Ruffle Blouse", price: 35.99, img: "https://source.unsplash.com/400x400/?silk-blouse", desc: "Elegant feminine detail.", reviews: [] },
                { name: "Sleeveless Peplum Blouse", price: 31.50, img: "https://source.unsplash.com/400x400/?peplum-top", desc: "Waist‑defining silhouette.", reviews: [] },
                { name: "Tie‑Neck Pussybow", price: 34.99, img: "https://source.unsplash.com/400x400/?pussybow-blouse", desc: "Work‑wear classic.", reviews: [] },
                { name: "Wrap Front Blouse", price: 32.50, img: "https://source.unsplash.com/400x400/?wrap-blouse", desc: "Flattering wrap styling.", reviews: [] },
                { name: "Eyelet Embroidered Blouse", price: 33.75, img: "https://source.unsplash.com/400x400/?embroidered-blouse", desc: "Textured feminine look.", reviews: [] },
                { name: "Denim Shirt Blouse", price: 29.99, img: "https://source.unsplash.com/400x400/?denim-blouse", desc: "Relaxed chambray styling.", reviews: [] },
                { name: "Off‑Shoulder Smock Blouse", price: 34.00, img: "https://source.unsplash.com/400x400/?offshoulder-blouse", desc: "Boho summer vibe.", reviews: [] },
                { name: "Balloon Sleeve Blouse", price: 32.99, img: "https://source.unsplash.com/400x400/?balloon-sleeve-blouse", desc: "Trend‑driven sleeves.", reviews: [] },
                { name: "Chiffon Tiered Blouse", price: 36.25, img: "https://source.unsplash.com/400x400/?tiered-blouse", desc: "Flowy and lightweight.", reviews: [] },
                { name: "Lace Yoke Blouse", price: 35.49, img: "https://source.unsplash.com/400x400/?lace-blouse", desc: "Delicate cotton‑lace detail.", reviews: [] },
                { name: "Peasant Style Blouse", price: 31.99, img: "https://source.unsplash.com/400x400/?peasant-blouse", desc: "Bohemian relaxed fit.", reviews: [] },
                { name: "Cap Sleeve Satin Blouse", price: 33.50, img: "https://source.unsplash.com/400x400/?satin-blouse", desc: "Evening ready sheen.", reviews: [] },
                { name: "Button‑Front Poplin Blouse", price: 29.99, img: "https://source.unsplash.com/400x400/?poplin-blouse", desc: "Workwear staple.", reviews: [] },
                { name: "Keyhole Neck Blouse", price: 34.25, img: "https://source.unsplash.com/400x400/?keyhole-blouse", desc: "Subtle neckline detail.", reviews: [] },
                { name: "Printed Peplum Blouse", price: 32.50, img: "https://source.unsplash.com/400x400/?printed-blouse", desc: "Structured peplum flare.", reviews: [] }
            ],
          
            "shirts": [
                { name: "Button‑Down Oxford Shirt", price: 29.99, img: "https://source.unsplash.com/400x400/?buttondown-shirt", desc: "Crisp office essential.", reviews: [] },
                { name: "Checked Casual Shirt", price: 27.50, img: "https://source.unsplash.com/400x400/?checked-shirt", desc: "Everyday comfort.", reviews: [] },
                { name: "Chambray Work Shirt", price: 30.49, img: "https://source.unsplash.com/400x400/?chambray-shirt", desc: "Relaxed denim feel.", reviews: [] },
                { name: "Striped Boyfriend Shirt", price: 28.99, img: "https://source.unsplash.com/400x400/?boyfriend-shirt", desc: "Oversized chic.", reviews: [] },
                { name: "Pinstripe Dress Shirt", price: 29.99, img: "https://source.unsplash.com/400x400/?formal-shirt", desc: "Work‑ready stripes.", reviews: [] },
                { name: "Tie‑Front Linen Shirt", price: 30.00, img: "https://source.unsplash.com/400x400/?linen-shirt", desc: "Lightweight drape.", reviews: [] },
                { name: "Woven Plaid Shirt", price: 27.99, img: "https://source.unsplash.com/400x400/?plaid-shirt", desc: "Relaxed fall layering.", reviews: [] },
                { name: "Silk Blend Tunic Shirt", price: 34.99, img: "https://source.unsplash.com/400x400/?silk-shirt", desc: "Soft silk‑blend finish.", reviews: [] },
                { name: "Utility Shirt Jacket", price: 35.50, img: "https://source.unsplash.com/400x400/?utility-jacket", desc: "Workwear with lightweight structure.", reviews: [] },
                { name: "Sleeveless Poplin Shirt", price: 28.99, img: "https://source.unsplash.com/400x400/?sleeveless-shirt", desc: "Warm‑weather friendly.", reviews: [] },
                { name: "Silhouette‑Shirt Dress", price: 39.99, img: "https://source.unsplash.com/400x400/?shirtdress", desc: "Button‑front and belt‑ed.", reviews: [] },
                { name: "Ruffle Trim Shirt", price: 32.00, img: "https://source.unsplash.com/400x400/?ruffle-shirt", desc: "Sweet feminine flair.", reviews: [] },
                { name: "Tie‑Sleeve Shirt", price: 30.50, img: "https://source.unsplash.com/400x400/?tiesleeve-shirt", desc: "Unique cuff design.", reviews: [] },
                { name: "Popcorn Knit Shirt", price: 31.25, img: "https://source.unsplash.com/400x400/?knit-shirt", desc: "Soft textured knit.", reviews: [] },
                { name: "Wrap‑Front Shirt", price: 33.49, img: "https://source.unsplash.com/400x400/?wrap-shirt", desc: "Feminine wrap style.", reviews: [] }
            ],
          
            "cropTops": [
                { name: "Ribbed Crop Top", price: 19.99, img: "https://source.unsplash.com/400x400/?crop-top", desc: "Fitted and flattering.", reviews: [] },
                { name: "Mesh Sleeve Crop Top", price: 22.50, img: "https://source.unsplash.com/400x400/?mesh-top", desc: "Sheer accent sleeves.", reviews: [] },
                { name: "Basic Boxy Crop Tee", price: 18.99, img: "https://source.unsplash.com/400x400/?boxy-top", desc: "Casual and easy.", reviews: [] },
                { name: "Lace Trim Crop Camisole", price: 21.99, img: "https://source.unsplash.com/400x400/?camisole", desc: "Delicate lace detail.", reviews: [] },
                { name: "Tie‑Front Crop Top", price: 23.99, img: "https://source.unsplash.com/400x400/?tiefront-top", desc: "Summer ready knot front.", reviews: [] },
                { name: "Athletic Tank Crop", price: 20.49, img: "https://source.unsplash.com/400x400/?tank-top", desc: "For workouts or layering.", reviews: [] },
                { name: "Off‑Shoulder Crop Top", price: 22.99, img: "https://source.unsplash.com/400x400/?offshoulder-top", desc: "Bare shoulder style.", reviews: [] },
                { name: "Pleated Crop Tee", price: 23.99, img: "https://source.unsplash.com/400x400/?pleated-top", desc: "Textured detail.", reviews: [] },
                { name: "Stripe Knit Crop", price: 21.49, img: "https://source.unsplash.com/400x400/?striped-top", desc: "Casual stripes.", reviews: [] },
                { name: "Halter Crop Top", price: 24.99, img: "https://source.unsplash.com/400x400/?halter-top", desc: "Neckline accent.", reviews: [] },
                { name: "Scallop Edge Crop Tee", price: 22.25, img: "https://source.unsplash.com/400x400/?scallop-top", desc: "Pretty edge detail.", reviews: [] },
                { name: "Long Sleeve Crop Top", price: 23.49, img: "https://source.unsplash.com/400x400/?longsleeve-crop", desc: "Cozy crop option.", reviews: [] },
                { name: "Velvet Crop Tank", price: 26.50, img: "https://source.unsplash.com/400x400/?velvet-top", desc: "Rich soft fabric.", reviews: [] },
                { name: "Graphic Crop Tee", price: 24.99, img: "https://source.unsplash.com/400x400/?graphic-crop", desc: "Bold print statement.", reviews: [] },
                { name: "Sequin Crop Top", price: 29.99, img: "https://source.unsplash.com/400x400/?sequin-top", desc: "Evening glam crop.", reviews: [] }
            ],
          
            "tunics": [
                { name: "Embroidered Cotton Kurti", price: 29.99, img: "https://source.unsplash.com/400x400/?kurti", desc: "Traditional embroidery detail.", reviews: [] },
                { name: "High‑Low Hem Kurti", price: 27.50, img: "https://source.unsplash.com/400x400/?kurta", desc: "Modern silhouette.", reviews: [] },
                { name: "Angrakha Style Kurti", price: 32.99, img: "https://source.unsplash.com/400x400/?angrakha", desc: "Indian ethnic wrap style.", reviews: [] },
                { name: "Block‑Print Tunic", price: 28.75, img: "https://source.unsplash.com/400x400/?blockprint", desc: "Vibrant handmade prints.", reviews: [] },
                { name: "Straight Cut Kurti", price: 25.99, img: "https://source.unsplash.com/400x400/?straight-kurti", desc: "Everyday ethnic staple.", reviews: [] },
                { name: "Printed A‑Line Kurti", price: 30.25, img: "https://source.unsplash.com/400x400/?apline-kurti", desc: "Flattering A‑line cut.", reviews: [] },
                { name: "Lace Yoke Kurti", price: 31.99, img: "https://source.unsplash.com/400x400/?lace-kurti", desc: "Delicate lace details.", reviews: [] },
                { name: "Short Kurti with Pockets", price: 29.49, img: "https://source.unsplash.com/400x400/?kurti-pockets", desc: "Casual with utility.", reviews: [] },
                { name: "Linen Blend Tunic", price: 33.99, img: "https://source.unsplash.com/400x400/?linen-kurti", desc: "Cool summer fabric.", reviews: [] },
                { name: "Mandarin Collar Kurti", price: 30.49, img: "https://source.unsplash.com/400x400/?mandarin-kurti", desc: "Modern neckline.", reviews: [] },
                { name: "Straight Kurti with Slits", price: 28.99, img: "https://source.unsplash.com/400x400/?slit-kurti", desc: "Easy movement fit.", reviews: [] },
                { name: "Mirror Work Kurti", price: 35.99, img: "https://source.unsplash.com/400x400/?mirrorwork-kurti", desc: "Festive shine detail.", reviews: [] },
                { name: "Printed Belted Kurti", price: 32.49, img: "https://source.unsplash.com/400x400/?belted-kurti", desc: "Waist‑accented style.", reviews: [] },
                { name: "Patch Pocket Tunic", price: 29.25, img: "https://source.unsplash.com/400x400/?tunic-pocket", desc: "Casual with pockets.", reviews: [] },
                { name: "Floral A‑Line Tunic", price: 30.99, img: "https://source.unsplash.com/400x400/?floraltunic", desc: "Bright floral style.", reviews: [] }
            ],
          
            "sweatshirts": [
                { name: "Cropped Hoodie Sweatshirt", price: 34.49, img: "https://source.unsplash.com/400x400/?women-hoodie", desc: "Cozy and on‑trend.", reviews: [] },
                { name: "Pull‑Over Graphic Sweatshirt", price: 33.99, img: "https://source.unsplash.com/400x400/?graphic-sweatshirt", desc: "Bold print and comfort.", reviews: [] },
                { name: "Zip‑Up Sport Hoodie", price: 36.50, img: "https://source.unsplash.com/400x400/?sport-hoodie", desc: "For casual workout vibe.", reviews: [] },
                { name: "Fleece Lined Sweatshirt", price: 38.25, img: "https://source.unsplash.com/400x400/?fleece-sweatshirt", desc: "Warm and soft interior.", reviews: [] },
                { name: "Tie‑Dye Sweatshirt", price: 35.99, img: "https://source.unsplash.com/400x400/?tiedye-sweatshirt", desc: "Fun and bold colors.", reviews: [] },
                { name: "Striped Crew Sweatshirt", price: 32.49, img: "https://source.unsplash.com/400x400/?crew-sweatshirt", desc: "Sporty yet casual.", reviews: [] },
                { name: "Drawstring Hoodie", price: 33.50, img: "https://source.unsplash.com/400x400/?drawstring-hoodie", desc: "Cozy everyday wear.", reviews: [] },
                { name: "Cropped Zip Hoodie", price: 34.75, img: "https://source.unsplash.com/400x400/?cropped-hoodie", desc: "Modern casual style.", reviews: [] },
                { name: "Sherpa Lined Hoodie", price: 39.99, img: "https://source.unsplash.com/400x400/?sherpa-hoodie", desc: "Ultra‑soft fleece lining.", reviews: [] },
                { name: "Tie‑Front Cropped Sweatshirt", price: 36.00, img: "https://source.unsplash.com/400x400/?tiefront-sweatshirt", desc: "Stylish casual piece.", reviews: [] },
                { name: "Off‑Shoulder Sweatshirt", price: 35.49, img: "https://source.unsplash.com/400x400/?offshoulder-sweatshirt", desc: "Chic lounge style.", reviews: [] },
                { name: "Mock Neck Sweatshirt", price: 34.25, img: "https://source.unsplash.com/400x400/?mockneck-sweatshirt", desc: "Comfy yet structured.", reviews: [] },
                { name: "Heathered Slim Sweatshirt", price: 32.99, img: "https://source.unsplash.com/400x400/?slim-sweatshirt", desc: "Fitted everyday layering", reviews: [] },
                { name: "Thermal Sweatshirt", price: 38.50, img: "https://source.unsplash.com/400x400/?thermal-sweatshirt", desc: "Warm textured fabric.", reviews: [] },
                { name: "Pocket Front Sweatshirt", price: 33.99, img: "https://source.unsplash.com/400x400/?pocket-sweatshirt", desc: "Functional and stylish.", reviews: [] }
            ],
            "Hoodies": [
                {name: "Classic Pullover Hoodie",price: 34.99,img: "https://source.unsplash.com/400x400/?womens-hoodie",desc: "Soft fleece, drawstring hood, and front pocket.",reviews: []},
                {name: "Cropped Zip-Up Hoodie",price: 36.49,img: "https://source.unsplash.com/400x400/?cropped-hoodie",desc: "Trendy cropped design with zip closure.",reviews: []},
                {name: "Oversized Lounge Hoodie",price: 39.99,img: "https://source.unsplash.com/400x400/?oversized-hoodie",desc: "Cozy oversized fit perfect for lounging.",reviews: []},
                {name: "Tie-Dye Hoodie",price: 35.00,img: "https://source.unsplash.com/400x400/?tie-dye-hoodie",desc: "Colorful and fun tie-dye print.",reviews: []},
                {name: "Sherpa-Lined Hoodie",price: 44.99,img: "https://source.unsplash.com/400x400/?sherpa-hoodie",desc: "Super warm with sherpa lining inside.",reviews: []},
                {name: "Zip-Up Active Hoodie",price: 38.50,img: "https://source.unsplash.com/400x400/?athletic-hoodie",desc: "Perfect for workouts and casual wear.",reviews: []},
                {name: "Printed Hoodie with Graphics",price: 33.99,img: "https://source.unsplash.com/400x400/?graphic-hoodie",desc: "Bold and playful front graphic design.",reviews: []},
                {name: "Ribbed Hem Hoodie",price: 32.99,img: "https://source.unsplash.com/400x400/?ribbed-hoodie",desc: "Stylish ribbed hem and cuffs.",reviews: []},
                {name: "Mock Neck Hoodie",price: 37.49,img: "https://source.unsplash.com/400x400/?mock-neck-hoodie",desc: "Modern silhouette with mock neck detail.",reviews: []},
                {name: "Color Block Hoodie",price: 35.25,img: "https://source.unsplash.com/400x400/?colorblock-hoodie",desc: "Contrasting color panels for a chic look.",reviews: []},
                {name: "Slouchy Fit Hoodie",price: 36.75,img: "https://source.unsplash.com/400x400/?slouchy-hoodie",desc: "Relaxed and comfy everyday hoodie.",reviews: []},
                {name: "Velvet Zip Hoodie",price: 41.99,img: "https://source.unsplash.com/400x400/?velvet-hoodie",desc: "Soft velvet finish for a luxe feel.", reviews: []},
                {name: "Asymmetrical Hem Hoodie",price: 38.99,img: "https://source.unsplash.com/400x400/?asymmetric-hoodie",desc: "Trendy hem with modern flair.",reviews: []},
                {name: "Embroidered Logo Hoodie",price: 40.00,img: "https://source.unsplash.com/400x400/?embroidered-hoodie",desc: "Minimalist hoodie with logo embroidery.",reviews: []},
                {name: "Athleisure Zip Hoodie",price: 36.25,img: "https://source.unsplash.com/400x400/?sporty-hoodie",desc: "Athleisure comfort for active days.",reviews: []}
            ],
            "Jeans": [
                { name: "High-Waist Skinny Jeans", price: 39.99, img: "https://source.unsplash.com/400x400/?womens-skinny-jeans", desc: "Figure-hugging fit with a flattering high rise.", reviews: [] },
                { name: "Mid-Rise Straight-Leg Jeans", price: 42.50, img: "https://source.unsplash.com/400x400/?womens-straight-jeans", desc: "Classic straight-leg cut for everyday wear.", reviews: [] },
                { name: "Mom-Fit Relaxed Jeans", price: 44.25, img: "https://source.unsplash.com/400x400/?womens-mom-jeans", desc: "Comfortable relaxed fit with vintage vibes.", reviews: [] },
                { name: "Bootcut Jeans", price: 46.00, img: "https://source.unsplash.com/400x400/?womens-bootcut-jeans", desc: "Slight flare at the hem for a retro look.", reviews: [] },
                { name: "Distressed Ripped Jeans", price: 48.75, img: "https://source.unsplash.com/400x400/?womens-ripped-jeans", desc: "Edgy ripped detailing throughout.", reviews: [] },
                { name: "Cropped Flare Jeans", price: 45.99, img: "https://source.unsplash.com/400x400/?womens-flare-jeans", desc: "Ankle-skimming flared silhouette.", reviews: [] },
                { name: "Dark Wash Slim Jeans", price: 41.50, img: "https://source.unsplash.com/400x400/?womens-dark-wash", desc: "Clean dark wash for versatile styling.", reviews: [] },
                { name: "Light Wash Boyfriend Jeans", price: 43.20, img: "https://source.unsplash.com/400x400/?womens-boyfriend-jeans", desc: "Relaxed, boyfriend-inspired cut.", reviews: [] },
                { name: "High-Rise Wide-Leg Jeans", price: 49.99, img: "https://source.unsplash.com/400x400/?womens-wide-leg-jeans", desc: "Statement wide-leg profile.", reviews: [] },
                { name: "Super Stretch Jeggings", price: 38.99, img: "https://source.unsplash.com/400x400/?womens-jeggings", desc: "Jegging comfort with jean look.", reviews: [] },
                { name: "Paperbag Waist Jeans", price: 47.50, img: "https://source.unsplash.com/400x400/?paperbag-jeans", desc: "Tied waist and relaxed fit.", reviews: [] },
                { name: "Raw Hem Cropped Jeans", price: 44.00, img: "https://source.unsplash.com/400x400/?raw-hem-jeans", desc: "Frayed hem for a casual edge.", reviews: [] },
                { name: "High-Rise Straight Crop", price: 42.75, img: "https://source.unsplash.com/400x400/?straight-crop-jeans", desc: "Cropped leg in a straight cut.", reviews: [] },
                { name: "Cuffed Denim Pants", price: 43.99, img: "https://source.unsplash.com/400x400/?cuffed-jeans", desc: "Rolled cuff detail at the ankle.", reviews: [] },
                { name: "Embroidered Floral Jeans", price: 50.00, img: "https://source.unsplash.com/400x400/?embroidered-jeans", desc: "Delicate floral embroidery accents.", reviews: [] }
            ],
            "Trousers": [
                { name: "High-Waisted Trousers", price: 39.99, img: "https://source.unsplash.com/400x400/?highwaist-women-trousers", desc: "Elegant high-rise trousers perfect for office or casual wear.", reviews: [] },
                { name: "Wide-Leg Palazzo Trousers", price: 42.99, img: "https://source.unsplash.com/400x400/?wideleg-women-trousers", desc: "Breathable and flowy fabric with a palazzo silhouette.", reviews: [] },
                { name: "Paper Bag Waist Trousers", price: 37.50, img: "https://source.unsplash.com/400x400/?paperbag-waist-trousers", desc: "Trendy waist design with tie belt.", reviews: [] },
                { name: "Pleated Formal Trousers", price: 41.25, img: "https://source.unsplash.com/400x400/?pleated-women-trousers", desc: "Structured and sleek design with sharp pleats.", reviews: [] },
                { name: "Slim Fit Cigarette Pants", price: 38.00, img: "https://source.unsplash.com/400x400/?slimfit-women-pants", desc: "Tapered and fitted for a sharp look.", reviews: [] },
                { name: "Ankle-Length Trousers", price: 35.75, img: "https://source.unsplash.com/400x400/?anklelength-women-pants", desc: "Cropped trousers with a clean hem.", reviews: [] },
                { name: "Linen Straight Trousers", price: 44.99, img: "https://source.unsplash.com/400x400/?linen-women-trousers", desc: "Lightweight and breathable fabric ideal for summer.", reviews: [] },
                { name: "Stretchy Office Pants", price: 36.99, img: "https://source.unsplash.com/400x400/?stretch-trousers", desc: "Comfortable fit with flexible stretch fabric.", reviews: [] },
                { name: "High-Rise Flared Trousers", price: 45.50, img: "https://source.unsplash.com/400x400/?flare-trousers", desc: "Chic flared bottom, ideal with heels.", reviews: [] },
                { name: "Side Zip Formal Trousers", price: 40.00, img: "https://source.unsplash.com/400x400/?sidezip-trousers", desc: "Sleek minimal design with side zip.", reviews: [] },
                { name: "Classic Check Trousers", price: 43.25, img: "https://source.unsplash.com/400x400/?check-women-pants", desc: "Modern checks for a stylish look.", reviews: [] },
                { name: "Belted Peg Trousers", price: 38.49, img: "https://source.unsplash.com/400x400/?belted-trousers", desc: "Tapered legs and flattering waist.", reviews: [] },
                { name: "Tapered Cargo Trousers", price: 36.75, img: "https://source.unsplash.com/400x400/?cargo-trousers", desc: "Casual utility style with side pockets.", reviews: [] },
                { name: "Crepe Formal Trousers", price: 42.00, img: "https://source.unsplash.com/400x400/?crepe-trousers", desc: "Smooth crepe fabric for office days.", reviews: [] },
                { name: "Button Hem Tailored Pants", price: 46.99, img: "https://source.unsplash.com/400x400/?tailored-trousers", desc: "Button detail at hem adds a modern touch.", reviews: [] }
            ],
            "Pants": [
                {name: "Classic Straight Formal Pants",price: 42.99,img: "https://source.unsplash.com/400x400/?women-formal-pants",desc: "Timeless straight-leg pants for work and meetings.",reviews: []},
                {
                  name: "High-Waisted Slim Trousers",
                  price: 44.50,
                  img: "https://source.unsplash.com/400x400/?highwaist-formal-pants",
                  desc: "Sleek silhouette, perfect for blazers and shirts.",
                  reviews: []
                },
                {
                  name: "Pleated Front Office Pants",
                  price: 46.00,
                  img: "https://source.unsplash.com/400x400/?pleated-office-trousers",
                  desc: "Front pleats add elegance to formal dressing.",
                  reviews: []
                },
                {
                  name: "Tapered Ankle Pants",
                  price: 40.75,
                  img: "https://source.unsplash.com/400x400/?tapered-trousers",
                  desc: "Tailored cut that tapers at the ankle for style.",
                  reviews: []
                },
                {
                  name: "Paperbag Waist Formal Pants",
                  price: 43.25,
                  img: "https://source.unsplash.com/400x400/?paperbag-pants",
                  desc: "Fashionable waist with tie-belt for a modern twist.",
                  reviews: []
                },
                {
                  name: "Wide-Leg Office Slacks",
                  price: 47.99,
                  img: "https://source.unsplash.com/400x400/?wideleg-formal-pants",
                  desc: "Comfortable and elegant wide-leg silhouette.",
                  reviews: []
                },
                {
                  name: "Cigarette Leg Dress Pants",
                  price: 41.50,
                  img: "https://source.unsplash.com/400x400/?cigarette-pants",
                  desc: "Polished and flattering for all body types.",
                  reviews: []
                },
                {
                  name: "Side-Zip Work Pants",
                  price: 38.99,
                  img: "https://source.unsplash.com/400x400/?sidezip-formal",
                  desc: "Clean look with discreet side zipper closure.",
                  reviews: []
                },
                {
                  name: "Checkered Formal Trousers",
                  price: 45.25,
                  img: "https://source.unsplash.com/400x400/?check-formal-pants",
                  desc: "Subtle checks make these a standout formal piece.",
                  reviews: []
                },
                {
                  name: "Creased Front Slim Pants",
                  price: 43.75,
                  img: "https://source.unsplash.com/400x400/?creased-trousers",
                  desc: "Sharp creases add structure to your ensemble.",
                  reviews: []
                },
                {
                  name: "Mid-Rise Stretch Pants",
                  price: 39.99,
                  img: "https://source.unsplash.com/400x400/?midrise-pants",
                  desc: "Soft stretch material for all-day comfort.",
                  reviews: []
                },
                {
                  name: "Color Block Formal Trousers",
                  price: 46.50,
                  img: "https://source.unsplash.com/400x400/?colorblock-pants",
                  desc: "Modern two-tone design for a bold office look.",
                  reviews: []
                },
                {
                  name: "Formal Bootcut Pants",
                  price: 44.00,
                  img: "https://source.unsplash.com/400x400/?bootcut-pants",
                  desc: "Subtle bootcut hem pairs well with heels.",
                  reviews: []
                },
                {
                  name: "Herringbone Pattern Slacks",
                  price: 49.00,
                  img: "https://source.unsplash.com/400x400/?herringbone-pants",
                  desc: "Premium pattern for a premium presence.",
                  reviews: []
                },
                {
                  name: "Tailored Suit Pants",
                  price: 48.99,
                  img: "https://source.unsplash.com/400x400/?tailored-suit-pants",
                  desc: "Perfect match for structured blazers.",
                  reviews: []
                }
            ],
            "LeggingsJeggings": [
                { name: "High-Waisted Black Leggings", price: 24.99, img: "https://source.unsplash.com/400x400/?black-leggings", desc: "Stretchy and versatile everyday leggings.", reviews: [] },
                { name: "Seamless Workout Leggings", price: 27.49, img: "https://source.unsplash.com/400x400/?gym-leggings", desc: "Moisture-wicking fabric for performance.", reviews: [] },
                { name: "Faux Leather Jeggings", price: 32.99, img: "https://source.unsplash.com/400x400/?leather-leggings", desc: "Sleek leather finish for night outs.", reviews: [] },
                { name: "Ribbed Lounge Leggings", price: 22.99, img: "https://source.unsplash.com/400x400/?ribbed-leggings", desc: "Soft and ribbed knit for cozy wear.", reviews: [] },
                { name: "Printed High-Stretch Jeggings", price: 26.99, img: "https://source.unsplash.com/400x400/?printed-leggings", desc: "Colorful prints with denim look.", reviews: [] },
                { name: "Capri-Length Leggings", price: 19.99, img: "https://source.unsplash.com/400x400/?capri-leggings", desc: "Cropped and breathable fit.", reviews: [] },
                { name: "Cotton Ankle Leggings", price: 21.49, img: "https://source.unsplash.com/400x400/?cotton-leggings", desc: "Everyday comfort in pure cotton.", reviews: [] },
                { name: "Panel Detail Active Jeggings", price: 29.99, img: "https://source.unsplash.com/400x400/?active-jeggings", desc: "Stylish contrast paneling and stretch.", reviews: [] },
                { name: "Denim Look Jeggings", price: 28.50, img: "https://source.unsplash.com/400x400/?denim-jeggings", desc: "All-day comfort with a denim vibe.", reviews: [] },
                { name: "Mesh Insert Leggings", price: 30.00, img: "https://source.unsplash.com/400x400/?mesh-leggings", desc: "Sheer mesh for breathable workouts.", reviews: [] },
                { name: "Ultra-Soft Lounge Jeggings", price: 26.50, img: "https://source.unsplash.com/400x400/?soft-jeggings", desc: "Feather-soft knit with stretchy waistband.", reviews: [] },
                { name: "Ombre Gradient Leggings", price: 25.99, img: "https://source.unsplash.com/400x400/?ombre-leggings", desc: "Stylish ombre effect for yoga or gym.", reviews: [] },
                { name: "Pocket Yoga Leggings", price: 27.00, img: "https://source.unsplash.com/400x400/?pocket-leggings", desc: "Deep side pockets for on-the-go essentials.", reviews: [] },
                { name: "Snakeskin Print Jeggings", price: 31.49, img: "https://source.unsplash.com/400x400/?snakeskin-jeggings", desc: "Bold and fierce snakeskin pattern.", reviews: [] },
                { name: "High-Compression Sports Leggings", price: 33.99, img: "https://source.unsplash.com/400x400/?compression-leggings", desc: "Supportive fit for intense training.", reviews: [] }
            ],
            "Shorts": [
                { name: "Denim High-Waisted Shorts", price: 29.99, img: "https://source.unsplash.com/400x400/?women-denim-shorts", desc: "Classic cut-off style with frayed hem.", reviews: [] },
                { name: "Cotton Lounge Shorts", price: 18.50, img: "https://source.unsplash.com/400x400/?cotton-shorts", desc: "Soft and breathable for summer days.", reviews: [] },
                { name: "Pleated Linen Shorts", price: 27.99, img: "https://source.unsplash.com/400x400/?linen-shorts", desc: "Elegant and airy with tailored pleats.", reviews: [] },
                { name: "Bermuda Length Shorts", price: 22.00, img: "https://source.unsplash.com/400x400/?bermuda-shorts", desc: "Knee-length coverage and comfort.", reviews: [] },
                { name: "High-Rise Paperbag Shorts", price: 24.99, img: "https://source.unsplash.com/400x400/?paperbag-shorts", desc: "Trendy and belted waist with gathered detail.", reviews: [] },
                { name: "Cycling Shorts", price: 21.49, img: "https://source.unsplash.com/400x400/?bike-shorts", desc: "Stretchy and fitted for workouts.", reviews: [] },
                { name: "Linen Blend Tie Shorts", price: 25.99, img: "https://source.unsplash.com/400x400/?tie-waist-shorts", desc: "Tie front, soft material for daywear.", reviews: [] },
                { name: "Ruched Sides Casual Shorts", price: 23.75, img: "https://source.unsplash.com/400x400/?ruched-shorts", desc: "Drawstring ruched design.", reviews: [] },
                { name: "Scallop Hem Dressy Shorts", price: 26.99, img: "https://source.unsplash.com/400x400/?scallop-shorts", desc: "Feminine cut with scalloped edges.", reviews: [] },
                { name: "Athletic Running Shorts", price: 20.49, img: "https://source.unsplash.com/400x400/?running-shorts", desc: "Breathable mesh for workouts.", reviews: [] },
                { name: "Mid-Wash Folded Denim Shorts", price: 30.00, img: "https://source.unsplash.com/400x400/?folded-denim-shorts", desc: "Folded hem and timeless denim style.", reviews: [] },
                { name: "Printed Casual Shorts", price: 19.99, img: "https://source.unsplash.com/400x400/?printed-shorts", desc: "Playful prints for a casual outing.", reviews: [] },
                { name: "Drawstring Lounge Shorts", price: 18.99, img: "https://source.unsplash.com/400x400/?drawstring-shorts", desc: "Relaxed fit with adjustable waistband.", reviews: [] },
                { name: "Satin Night Shorts", price: 22.50, img: "https://source.unsplash.com/400x400/?satin-shorts", desc: "Luxurious satin feel for sleepwear.", reviews: [] },
                { name: "Paperbag Denim Shorts", price: 28.49, img: "https://source.unsplash.com/400x400/?paperbag-denim", desc: "Waist gathered denim with cute belt.", reviews: [] }
            ],
            "Skirts": [
                { name: "A-Line Denim Skirt", price: 32.99, img: "https://source.unsplash.com/400x400/?denim-skirt", desc: "Casual classic A-line silhouette.", reviews: [] },
                { name: "Floral Midi Skirt", price: 29.99, img: "https://source.unsplash.com/400x400/?floral-midi-skirt", desc: "Romantic prints perfect for spring.", reviews: [] },
                { name: "Pleated School Skirt", price: 27.50, img: "https://source.unsplash.com/400x400/?pleated-skirt", desc: "Neatly pleated with uniform charm.", reviews: [] },
                { name: "High-Slit Maxi Skirt", price: 34.25, img: "https://source.unsplash.com/400x400/?maxi-skirt", desc: "Elegant flowy silhouette with slit.", reviews: [] },
                { name: "Button-Front Corduroy Skirt", price: 28.49, img: "https://source.unsplash.com/400x400/?corduroy-skirt", desc: "Vintage touch with front buttons.", reviews: [] },
                { name: "Wrap-Style Tie Skirt", price: 30.99, img: "https://source.unsplash.com/400x400/?wrap-skirt", desc: "Tie detail for adjustable fit.", reviews: [] },
                { name: "Tulle Party Skirt", price: 36.50, img: "https://source.unsplash.com/400x400/?tulle-skirt", desc: "Layered tulle for elegant occasions.", reviews: [] },
                { name: "Bodycon Mini Skirt", price: 26.75, img: "https://source.unsplash.com/400x400/?mini-skirt", desc: "Curve-hugging fit for party vibes.", reviews: [] },
                { name: "Boho Tiered Maxi Skirt", price: 33.00, img: "https://source.unsplash.com/400x400/?tiered-skirt", desc: "Bohemian ruffles and prints.", reviews: [] },
                { name: "Satin Bias-Cut Skirt", price: 31.49, img: "https://source.unsplash.com/400x400/?satin-skirt", desc: "Elegant flow and shine.", reviews: [] },
                { name: "Faux Leather Skirt", price: 35.99, img: "https://source.unsplash.com/400x400/?leather-skirt", desc: "Edgy and bold look for evenings.", reviews: [] },
                { name: "Ruffle Hem Skirt", price: 29.00, img: "https://source.unsplash.com/400x400/?ruffle-skirt", desc: "Feminine and flowy with movement.", reviews: [] },
                { name: "Asymmetrical Hem Skirt", price: 33.75, img: "https://source.unsplash.com/400x400/?asymmetrical-skirt", desc: "Trendy hemline and modern cut.", reviews: [] },
                { name: "Houndstooth Pencil Skirt", price: 38.50, img: "https://source.unsplash.com/400x400/?houndstooth-skirt", desc: "Perfect for work or dinner.", reviews: [] },
                { name: "Patch Pocket Skirt", price: 30.25, img: "https://source.unsplash.com/400x400/?pocket-skirt", desc: "Utility look with front pockets.", reviews: [] }
            ],
            "CasualDresses": [
                { name: "Cotton T-Shirt Dress", price: 29.99, img: "https://source.unsplash.com/400x400/?tshirt-dress", desc: "Soft and relaxed fit for daily wear.", reviews: [] },
                { name: "Smock Tiered Dress", price: 34.50, img: "https://source.unsplash.com/400x400/?smock-dress", desc: "Flowy smocked top with tiers.", reviews: [] },
                { name: "Shirt Style Casual Dress", price: 37.25, img: "https://source.unsplash.com/400x400/?shirt-dress", desc: "Smart casual in a relaxed silhouette.", reviews: [] },
                { name: "Wrap Cotton Dress", price: 35.00, img: "https://source.unsplash.com/400x400/?wrap-dress", desc: "Adjustable fit with side tie.", reviews: [] },
                { name: "A-Line Short Dress", price: 31.75, img: "https://source.unsplash.com/400x400/?casual-a-line", desc: "Timeless silhouette for all occasions.", reviews: [] },
                { name: "Belted Chambray Dress", price: 36.99, img: "https://source.unsplash.com/400x400/?chambray-dress", desc: "Denim-inspired comfort and style.", reviews: [] },
                { name: "Sleeveless Linen Dress", price: 32.00, img: "https://source.unsplash.com/400x400/?linen-dress", desc: "Breathable and perfect for warm days.", reviews: [] },
                { name: "Printed Cotton Mini Dress", price: 30.49, img: "https://source.unsplash.com/400x400/?printed-casual-dress", desc: "Playful prints and short length.", reviews: [] },
                { name: "V-Neck Boho Dress", price: 33.25, img: "https://source.unsplash.com/400x400/?boho-casual-dress", desc: "Relaxed boho vibe with tassels.", reviews: [] },
                { name: "Halter Neck Day Dress", price: 34.99, img: "https://source.unsplash.com/400x400/?halter-casual-dress", desc: "Great for weekend outings.", reviews: [] },
                { name: "Sleeveless Ribbed Dress", price: 28.99, img: "https://source.unsplash.com/400x400/?ribbed-dress", desc: "Comfortable stretch for all-day wear.", reviews: [] },
                { name: "Button Front Midi Dress", price: 36.75, img: "https://source.unsplash.com/400x400/?button-midi-dress", desc: "Wooden buttons and flowy fit.", reviews: [] },
                { name: "Side Knot Jersey Dress", price: 27.99, img: "https://source.unsplash.com/400x400/?jersey-dress", desc: "Soft stretch jersey with flattering knot.", reviews: [] },
                { name: "Relaxed Fit Knit Dress", price: 32.50, img: "https://source.unsplash.com/400x400/?knit-casual-dress", desc: "Soft knit, ideal for layering.", reviews: [] },
                { name: "Ruffle Hem Day Dress", price: 35.00, img: "https://source.unsplash.com/400x400/?ruffle-day-dress", desc: "Feminine ruffles in an easy cut.", reviews: [] }
            ],
            "EveningDresses": [
                { name: "Sequined Bodycon Dress", price: 59.99, img: "https://source.unsplash.com/400x400/?sequin-dress", desc: "Sparkly and fitted for glam nights.", reviews: [] },
                { name: "Off-Shoulder Satin Gown", price: 72.50, img: "https://source.unsplash.com/400x400/?offshoulder-gown", desc: "Elegance with a dramatic neckline.", reviews: [] },
                { name: "One-Shoulder Maxi Dress", price: 68.00, img: "https://source.unsplash.com/400x400/?one-shoulder-dress", desc: "Chic single shoulder look.", reviews: [] },
                { name: "Velvet Wrap Dress", price: 64.99, img: "https://source.unsplash.com/400x400/?velvet-dress", desc: "Rich velvet texture and flattering wrap.", reviews: [] },
                { name: "Backless Evening Dress", price: 70.25, img: "https://source.unsplash.com/400x400/?backless-dress", desc: "Dramatic back for evening elegance.", reviews: [] },
                { name: "High Slit Party Dress", price: 66.99, img: "https://source.unsplash.com/400x400/?slit-dress", desc: "Allure and grace combined.", reviews: [] },
                { name: "Spaghetti Strap Gown", price: 69.50, img: "https://source.unsplash.com/400x400/?spaghetti-gown", desc: "Lightweight with a luxurious flow.", reviews: [] },
                { name: "Shimmer Mesh Overlay Dress", price: 65.00, img: "https://source.unsplash.com/400x400/?shimmer-dress", desc: "Subtle sparkle for starry evenings.", reviews: [] },
                { name: "Ruched Midi Bodycon", price: 58.75, img: "https://source.unsplash.com/400x400/?ruched-dress", desc: "Figure-enhancing with ruched details.", reviews: [] },
                { name: "Halter Neck Evening Dress", price: 62.99, img: "https://source.unsplash.com/400x400/?halter-evening-dress", desc: "Classy halter cut with elegant fit.", reviews: [] },
                { name: "Embroidered Cocktail Dress", price: 67.49, img: "https://source.unsplash.com/400x400/?embroidered-dress", desc: "Intricate embroidery for sophistication.", reviews: [] },
                { name: "Sheer Panel Long Dress", price: 71.25, img: "https://source.unsplash.com/400x400/?sheer-evening-dress", desc: "Romantic panels add a modern twist.", reviews: [] },
                { name: "Bardot Velvet Maxi", price: 69.00, img: "https://source.unsplash.com/400x400/?bardot-dress", desc: "Soft off-shoulder drape.", reviews: [] },
                { name: "Mermaid Silhouette Gown", price: 73.99, img: "https://source.unsplash.com/400x400/?mermaid-gown", desc: "Hugged waist and flared hem.", reviews: [] },
                { name: "Classic Black Tie Dress", price: 75.00, img: "https://source.unsplash.com/400x400/?black-gown", desc: "Simple, stunning, and timeless.", reviews: [] }
            ],
            "SummerDresses": [
                { name: "Floral Spaghetti Dress", price: 32.99, img: "https://source.unsplash.com/400x400/?floral-dress", desc: "Lightweight and breezy with floral print.", reviews: [] },
                { name: "Halter Neck Sundress", price: 29.99, img: "https://source.unsplash.com/400x400/?halter-sundress", desc: "Perfect for beach days.", reviews: [] }
            ]
        },
        "kids": {
            "tshirts": [
                { name: "Basic Kids T-Shirt", price: 12.99, img: "https://source.unsplash.com/400x400/?kids-tshirt", desc: "Soft and comfortable for everyday wear.", reviews: [] },
                { name: "Graphic Print T-Shirt", price: 14.49, img: "https://source.unsplash.com/400x400/?kids-graphic-tshirt", desc: "Fun and colorful designs.", reviews: [] },
                { name: "Crew Neck T-Shirt", price: 13.99, img: "https://source.unsplash.com/400x400/?kids-crew-tshirt", desc: "Classic crew neck style.", reviews: [] },
                { name: "V-Neck T-Shirt", price: 15.49, img: "https://source.unsplash.com/400x400/?kids-vneck-tshirt", desc: "Modern v-neck design.", reviews: [] },
                { name: "Long Sleeve T-Shirt", price: 16.99, img: "https://source.unsplash.com/400x400/?kids-longsleeve-tshirt", desc: "Perfect for cooler days.", reviews: [] },
                { name: "Sleeveless T-Shirt", price: 11.99, img: "https://source.unsplash.com/400x400/?kids-sleeveless-tshirt", desc: "Light and breathable.", reviews: [] },
                { name: "Tank Top", price: 10.99, img: "https://source.unsplash.com/400x400/?kids-tank-top", desc: "Casual and comfortable.", reviews: [] },
                { name: "Polo Shirt", price: 18.99, img: "https://source.unsplash.com/400x400/?kids-polo-shirt", desc: "Classic polo shirt style.", reviews: [] },
                { name: "Striped T-Shirt", price: 14.99, img: "https://source.unsplash.com/400x400/?kids-striped-tshirt", desc: "Playful stripes for kids.", reviews: [] },
                { name: "Printed T-Shirt", price: 16.49, img: "https://source.unsplash.com/400x400/?kids-printed-tshirt", desc: "Cute and colorful prints.", reviews: [] },
                { name: "Sports T-Shirt", price: 17.99, img: "https://source.unsplash.com/400x400/?kids-sports-tshirt", desc: "Perfect for active kids.", reviews: [] },
                { name: "Cotton T-Shirt", price: 13.49, img: "https://source.unsplash.com/400x400/?kids-cotton-tshirt", desc: "Soft and breathable cotton.", reviews: [] },
                { name: "Ribbed T-Shirt", price: 15.99, img: "https://source.unsplash.com/400x400/?kids-ribbed-tshirt", desc: "Soft ribbed knit for comfort.", reviews: [] },
                { name: "Hoodie", price: 22.99, img: "https://source.unsplash.com/400x400/?kids-hoodie", desc: "Cozy and stylish hoodie.", reviews: [] },
                { name: "Zip-Up Hoodie", price: 24.99, img: "https://source.unsplash.com/400x400/?kids-zip-hoodie", desc: "Warm and trendy zip-up hoodie.", reviews: [] }
            ],
            "shirts": [
                { name: "Casual Shirt", price: 21.99, img: "https://source.unsplash.com/400x400/?kids-casual-shirt", desc: "Comfortable and versatile.", reviews: [] },
                { name: "Checkered Shirt", price: 23.49, img: "https://source.unsplash.com/400x400/?kids-checkered-shirt", desc: "Classic checkered pattern.", reviews: [] },
                { name: "Denim Shirt", price: 24.99, img: "https://source.unsplash.com/400x400/?kids-denim-shirt", desc: "Casual denim shirt for kids.", reviews: [] },
                { name: "Plaid Shirt", price: 22.99, img: "https://source.unsplash.com/400x400/?kids-plaid-shirt", desc: "Cute plaid pattern for boys.", reviews: [] },
                { name: "Button-Down Shirt", price: 26.49, img: "https://source.unsplash.com/400x400/?kids-button-down", desc: "Classic button-down shirt.", reviews: [] },
                { name: "Polo Shirt", price: 20.99, img: "https://source.unsplash.com/400x400/?kids-polo-shirt", desc: "Casual polo shirt for kids.", reviews: [] },
                { name: "Striped Shirt", price: 22.49, img: "https://source.unsplash.com/400x400/?kids-striped-shirt", desc: "Playful stripes for boys.", reviews: [] },
                { name: "Printed Shirt", price: 23.99, img: "https://source.unsplash.com/400x400/?kids-printed-shirt", desc: "Cute and colorful prints.", reviews: [] },
                { name: "Cotton Shirt", price: 21.49, img: "https://source.unsplash.com/400x400/?kids-cotton-shirt", desc: "Soft and breathable cotton.", reviews: [] },
                { name: "Chambray Shirt", price: 25.99, img: "https://source.unsplash.com/400x400/?kids-chambray-shirt", desc: "Classic chambray shirt style.", reviews: [] },
                { name: "Linen Shirt", price: 24.99, img: "https://source.unsplash.com/400x400/?kids-linen-shirt", desc: "Breathable linen for summer.", reviews: [] },
                { name: "Flannel Shirt", price: 27.99, img: "https://source.unsplash.com/400x400/?kids-flannel-shirt", desc: "Cozy flannel shirt for fall.", reviews: [] },
                { name: "Oxford Shirt", price: 26.49, img: "https://source.unsplash.com/400x400/?kids-oxford-shirt", desc: "Classic oxford shirt style.", reviews: [] },
                { name: "Dress Shirt", price: 28.99, img: "https://source.unsplash.com/400x400/?kids-dress-shirt", desc: "Formal dress shirt for special occasions.", reviews: [] }
            ],
            "shorts": [
                { name: "Casual Shorts", price: 18.99, img: "https://source.unsplash.com/400x400/?kids-casual-shorts", desc: "Comfortable and versatile.", reviews: [] },
                { name: "Denim Shorts", price: 20.49, img: "https://source.unsplash.com/400x400/?kids-denim-shorts", desc: "Classic denim shorts for kids.", reviews: [] },
                { name: "Athletic Shorts", price: 19.99, img: "https://source.unsplash.com/400x400/?kids-athletic-shorts", desc: "Perfect for sports and play.", reviews: [] },
                { name: "Cargo Shorts", price: 21.49, img: "https://source.unsplash.com/400x400/?kids-cargo-shorts", desc: "Utility cargo shorts with pockets.", reviews: [] },
                { name: "Bermuda Shorts", price: 17.99, img: "https://source.unsplash.com/400x400/?kids-bermuda-shorts", desc: "Classic bermuda shorts style.", reviews: [] },
                { name: "Board Shorts", price: 22.99, img: "https://source.unsplash.com/400x400/?kids-board-shorts", desc: "Durable board shorts for water sports.", reviews: [] },
                { name: "Chino Shorts", price: 20.99, img: "https://source.unsplash.com/400x400/?kids-chino-shorts", desc: "Casual chino shorts for boys.", reviews: [] },
                { name: "Linen Shorts", price: 19.49, img: "https://source.unsplash.com/400x400/?kids-linen-shorts", desc: "Breathable linen shorts for summer.", reviews: [] },
                { name: "Printed Shorts", price: 21.99, img: "https://source.unsplash.com/400x400/?kids-printed-shorts", desc: "Cute and colorful printed shorts.", reviews: [] },
                { name: "Cotton Shorts", price: 18.49, img: "https://source.unsplash.com/400x400/?kids-cotton-shorts", desc: "Soft and breathable cotton shorts.", reviews: [] },
                { name: "Chambray Shorts", price: 23.99, img: "https://source.unsplash.com/400x400/?kids-chambray-shorts", desc: "Classic chambray shorts style.", reviews: [] },
                { name: "Pleated Shorts", price: 22.49, img: "https://source.unsplash.com/400x400/?kids-pleated-shorts", desc: "Elegant pleated shorts for girls.", reviews: [] },
                { name: "Cargo Pants", price: 24.99, img: "https://source.unsplash.com/400x400/?kids-cargo-pants", desc: "Utility cargo pants with pockets.", reviews: [] },
                { name: "Jogger Pants", price: 26.99, img: "https://source.unsplash.com/400x400/?kids-jogger-pants", desc: "Comfortable jogger pants for active kids.", reviews: [] }
            ],
            "pants": [
                { name: "Casual Pants", price: 24.99, img: "https://source.unsplash.com/400x400/?kids-casual-pants", desc: "Comfortable and versatile.", reviews: [] },
                { name: "Denim Pants", price: 26.49, img: "https://source.unsplash.com/400x400/?kids-denim-pants", desc: "Classic denim pants for kids.", reviews: [] },
                { name: "Athletic Pants", price: 25.99, img: "https://source.unsplash.com/400x400/?kids-athletic-pants", desc: "Perfect for sports and play.", reviews: [] },
                { name: "Cargo Pants", price: 27.49, img: "https://source.unsplash.com/400x400/?kids-cargo-pants", desc: "Utility cargo pants with pockets.", reviews: [] },
                { name: "Chino Pants", price: 28.99, img: "https://source.unsplash.com/400x400/?kids-chino-pants", desc: "Casual chino pants for boys.", reviews: [] },
                { name: "Linen Pants", price: 23.99, img: "https://source.unsplash.com/400x400/?kids-linen-pants", desc: "Breathable linen pants for summer.", reviews: [] },
                { name: "Printed Pants", price: 25.99, img: "https://source.unsplash.com/400x400/?kids-printed-pants", desc: "Cute and colorful printed pants.", reviews: [] },
                { name: "Cotton Pants", price: 22.99, img: "https://source.unsplash.com/400x400/?kids-cotton-pants", desc: "Soft and breathable cotton pants.", reviews: [] },
                { name: "Chambray Pants", price: 29.99, img: "https://source.unsplash.com/400x400/?kids-chambray-pants", desc: "Classic chambray pants style.", reviews: [] },
                { name: "Pleated Pants", price: 27.49, img: "https://source.unsplash.com/400x400/?kids-pleated-pants", desc: "Elegant pleated pants for girls.", reviews: [] },
                { name: "Jogger Pants", price: 26.99, img: "https://source.unsplash.com/400x400/?kids-jogger-pants", desc: "Comfortable jogger pants for active kids.", reviews: [] },
                { name: "Corduroy Pants", price: 28.49, img: "https://source.unsplash.com/400x400/?kids-corduroy-pants", desc: "Classic corduroy pants style.", reviews: [] },
                { name: "Khaki Pants", price: 24.99, img: "https://source.unsplash.com/400x400/?kids-khaki-pants", desc: "Versatile khaki pants for boys.", reviews: [] },
                { name: "Dress Pants", price: 30.99, img: "https://source.unsplash.com/400x400/?kids-dress-pants", desc: "Formal dress pants for special occasions.", reviews: [] }
            ],
            "dresses": [
                { name: "Casual Dress", price: 29.99, img: "https://source.unsplash.com/400x400/?kids-casual-dress", desc: "Comfortable and versatile.", reviews: [] },
                { name: "Floral Dress", price: 31.49, img: "https://source.unsplash.com/400x400/?kids-floral-dress", desc: "Cute floral print dress for girls.", reviews: [] },
                { name: "Printed Dress", price: 32.99, img: "https://source.unsplash.com/400x400/?kids-printed-dress", desc: "Colorful printed dress for kids.", reviews: [] },
                { name: "Linen Dress", price: 30.99, img: "https://source.unsplash.com/400x400/?kids-linen-dress", desc: "Breathable linen dress for summer.", reviews: [] },
                { name: "Maxi Dress", price: 34.99, img: "https://source.unsplash.com/400x400/?kids-maxi-dress", desc: "Elegant maxi dress for special occasions.", reviews: [] },
                { name: "Midi Dress", price: 33.49, img: "https://source.unsplash.com/400x400/?kids-midi-dress", desc: "Stylish midi dress for girls.", reviews: [] },
                { name: "Wrap Dress", price: 31.99, img: "https://source.unsplash.com/400x400/?kids-wrap-dress", desc: "Adjustable wrap dress for easy fit.", reviews: [] },
                { name: "Tiered Dress", price: 35.99, img: "https://source.unsplash.com/400x400/?kids-tiered-dress", desc: "Layered tiered dress for a fun look.", reviews: [] },
                { name: "Sundress", price: 28.99, img: "https://source.unsplash.com/400x400/?kids-sundress", desc: "Casual sundress for girls.", reviews: [] },
                { name: "Denim Dress", price: 32.49, img: "https://source.unsplash.com/400x400/?kids-denim-dress", desc: "Casual denim dress for kids.", reviews: [] },
                { name: "Chambray Dress", price: 36.99, img: "https://source.unsplash.com/400x400/?kids-chambray-dress", desc: "Classic chambray dress style.", reviews: [] },
                { name: "Cotton Dress", price: 29.99, img: "https://source.unsplash.com/400x400/?kids-cotton-dress", desc: "Soft and breathable cotton dress.", reviews: [] },
                { name: "Ruffled Dress", price: 33.99, img: "https://source.unsplash.com/400x400/?kids-ruffled-dress", desc: "Feminine ruffled dress for girls.", reviews: [] },
                { name: "Party Dress", price: 37.99, img: "https://source.unsplash.com/400x400/?kids-party-dress", desc: "Sparkly party dress for special occasions.", reviews: [] }
            ],
            "sweaters": [
                { name: "Crew Neck Sweater", price: 19.99, img: "https://source.unsplash.com/400x400/?kids-crew-sweater", desc: "Comfortable and cozy.", reviews: [] },
                { name: "V-Neck Sweater", price: 21.49, img: "https://source.unsplash.com/400x400/?kids-vneck-sweater", desc: "Modern v-neck design.", reviews: [] },
                { name: "Zip-Up Sweater", price: 22.99, img: "https://source.unsplash.com/400x400/?kids-zip-sweater", desc: "Warm and trendy zip-up sweater.", reviews: [] },
                { name: "Cardigan Sweater", price: 24.99, img: "https://source.unsplash.com/400x400/?kids-cardigan-sweater", desc: "Casual cardigan sweater for girls.", reviews: [] },
                { name: "Pullover Sweater", price: 23.49, img: "https://source.unsplash.com/400x400/?kids-pullover-sweater", desc: "Classic pullover sweater style.", reviews: [] },
                { name: "Turtleneck Sweater", price: 20.99, img: "https://source.unsplash.com/400x400/?kids-turtleneck-sweater", desc: "Warm and cozy turtleneck sweater.", reviews: [] },
                { name: "Cotton Sweater", price: 18.99, img: "https://source.unsplash.com/400x400/?kids-cotton-sweater", desc: "Soft and breathable cotton sweater.", reviews: [] },
                { name: "Fleece Sweater", price: 25.99, img: "https://source.unsplash.com/400x400/?kids-fleece-sweater", desc: "Cozy fleece sweater for winter.", reviews: [] },
                { name: "Chunky Knit Sweater", price: 27.99, img: "https://source.unsplash.com/400x400/?kids-chunky-sweater", desc: "Warm and stylish chunky knit sweater.", reviews: [] },
                { name: "Ribbed Sweater", price: 22.49, img: "https://source.unsplash.com/400x400/?kids-ribbed-sweater", desc: "Soft ribbed knit for comfort.", reviews: [] },
                { name: "Striped Sweater", price: 20.49, img: "https://source.unsplash.com/400x400/?kids-striped-sweater", desc: "Playful stripes for kids.", reviews: [] },
                { name: "Printed Sweater", price: 23.99, img: "https://source.unsplash.com/400x400/?kids-printed-sweater", desc: "Cute and colorful prints.", reviews: [] },
                { name: "Sports Sweater", price: 26.99, img: "https://source.unsplash.com/400x400/?kids-sports-sweater", desc: "Perfect for active kids.", reviews: [] },
                { name: "Hooded Sweater", price: 28.99, img: "https://source.unsplash.com/400x400/?kids-hooded-sweater", desc: "Cozy and stylish hooded sweater.", reviews: [] }
            ],
            "jackets": [
                { name: "Denim Jacket", price: 34.99, img: "https://source.unsplash.com/400x400/?kids-denim-jacket", desc: "Classic denim jacket for kids.", reviews: [] },
                { name: "Hooded Jacket", price: 36.49, img: "https://source.unsplash.com/400x400/?kids-hooded-jacket", desc: "Cozy and stylish hooded jacket.", reviews: [] },
                { name: "Puffer Jacket", price: 39.99, img: "https://source.unsplash.com/400x400/?kids-puffer-jacket", desc: "Warm and trendy puffer jacket.", reviews: [] },
                { name: "Fleece Jacket", price: 32.99, img: "https://source.unsplash.com/400x400/?kids-fleece-jacket", desc: "Cozy fleece jacket for winter.", reviews: [] },
                { name: "Rain Jacket", price: 37.49, img: "https://source.unsplash.com/400x400/?kids-rain-jacket", desc: "Waterproof rain jacket for outdoor activities.", reviews: [] },
                { name: "Windbreaker Jacket", price: 35.99, img: "https://source.unsplash.com/400x400/?kids-windbreaker-jacket", desc: "Lightweight windbreaker jacket for sports.", reviews: [] },
                { name: "Bomber Jacket", price: 38.99, img: "https://source.unsplash.com/400x400/?kids-bomber-jacket", desc: "Stylish bomber jacket for boys.", reviews: [] },
                { name: "Down Jacket", price: 42.99, img: "https://source.unsplash.com/400x400/?kids-down-jacket", desc: "Warm and insulated down jacket for cold weather.", reviews: [] },
                { name: "Parka Jacket", price: 44.99, img: "https://source.unsplash.com/400x400/?kids-parka-jacket", desc: "Stylish parka jacket for outdoor adventures.", reviews: [] },
                { name: "Quilted Jacket", price: 39.99, img: "https://source.unsplash.com/400x400/?kids-quilted-jacket", desc: "Warm and trendy quilted jacket.", reviews: [] },
                { name: "Leather Jacket", price: 49.99, img: "https://source.unsplash.com/400x400/?kids-leather-jacket", desc: "Classic leather jacket for boys.", reviews: [] },
                { name: "Faux Leather Jacket", price: 37.99, img: "https://source.unsplash.com/400x400/?kids-faux-leather-jacket", desc: "Stylish faux leather jacket for girls.", reviews: [] },
                { name: "Sherpa Jacket", price: 41.99, img: "https://source.unsplash.com/400x400/?kids-sherpa-jacket", desc: "Cozy sherpa jacket for winter.", reviews: [] },
                { name: "Insulated Jacket", price: 46.99, img: "https://source.unsplash.com/400x400/?kids-insulated-jacket", desc: "Warm and insulated jacket for extreme cold.", reviews: [] }
            ],
            "shoes": [
                { name: "Sneakers", price: 39.99, img: "https://source.unsplash.com/400x400/?kids-sneakers", desc: "Comfortable and versatile sneakers.", reviews: [] },
                { name: "Boots", price: 44.99, img: "https://source.unsplash.com/400x400/?kids-boots", desc: "Warm and stylish boots for winter.", reviews: [] },
                { name: "Sandals", price: 29.99, img: "https://source.unsplash.com/400x400/?kids-sandals", desc: "Casual sandals for summer.", reviews: [] },
                { name: "Loafers", price: 32.99, img: "https://source.unsplash.com/400x400/?kids-loafers", desc: "Classic loafers for boys.", reviews: [] },
                { name: "Flats", price: 27.99, img: "https://source.unsplash.com/400x400/?kids-flats", desc: "Comfortable flats for girls.", reviews: [] },
                { name: "Sneaker Boots", price: 42.99, img: "https://source.unsplash.com/400x400/?kids-sneaker-boots", desc: "Stylish sneaker boots for kids.", reviews: [] },
                { name: "Slip-Ons", price: 24.99, img: "https://source.unsplash.com/400x400/?kids-slip-ons", desc: "Casual slip-on shoes for boys.", reviews: [] },
                { name: "Moccasins", price: 37.99, img: "https://source.unsplash.com/400x400/?kids-moccasins", desc: "Classic moccasins for boys.", reviews: [] },
                { name: "Oxfords", price: 35.99, img: "https://source.unsplash.com/400x400/?kids-oxfords", desc: "Classic oxfords for boys.", reviews: [] },
                { name: "Sneaker Sandals", price: 31.99, img: "https://source.unsplash.com/400x400/?kids-sneaker-sandals", desc: "Casual sneaker sandals for girls.", reviews: [] },
                { name: "Ballet Flats", price: 26.99, img: "https://source.unsplash.com/400x400/?kids-ballet-flats", desc: "Comfortable ballet flats for girls.", reviews: [] },
                { name: "Athletic Shoes", price: 41.99, img: "https://source.unsplash.com/400x400/?kids-athletic-shoes", desc: "Perfect for sports and play.", reviews: [] },
                { name: "Casual Shoes", price: 33.99, img: "https://source.unsplash.com/400x400/?kids-casual-shoes", desc: "Comfortable and stylish casual shoes.", reviews: [] },
                { name: "Dress Shoes", price: 46.99, img: "https://source.unsplash.com/400x400/?kids-dress-shoes", desc: "Formal dress shoes for special occasions.", reviews: [] }
            ],
            "accessories": [
                { name: "Backpack", price: 29.99, img: "https://source.unsplash.com/400x400/?kids-backpack", desc: "Durable backpack for school and outdoor activities.", reviews: [] },
                { name: "Hat", price: 14.99, img: "https://source.unsplash.com/400x400/?kids-hat", desc: "Cute and stylish hat for kids.", reviews: [] },
                { name: "Gloves", price: 9.99, img: "https://source.unsplash.com/400x400/?kids-gloves", desc: "Warm and cozy gloves for winter.", reviews: [] },
                { name: "Scarf", price: 12.99, img: "https://source.unsplash.com/400x400/?kids-scarf", desc: "Cozy scarf for cold days.", reviews: [] },
                { name: "Sunglasses", price: 17.99, img: "https://source.unsplash.com/400x400/?kids-sunglasses", desc: "Stylish sunglasses for kids.", reviews: [] },
                { name: "Belt", price: 10.99, img: "https://source.unsplash.com/400x400/?kids-belt", desc: "Classic belt for pants.", reviews: [] },
                { name: "Socks", price: 7.99, img: "https://source.unsplash.com/400x400/?kids-socks", desc: "Comfortable socks for everyday wear.", reviews: [] },
                { name: "Hair Accessories", price: 11.99, img: "https://source.unsplash.com/400x400/?kids-hair-accessories", desc: "Cute hair accessories for girls.", reviews: [] },
                { name: "Jewelry", price: 15.99, img: "https://source.unsplash.com/400x400/?kids-jewelry", desc: "Delicate and stylish jewelry for girls.", reviews: [] },
                { name: "Watch", price: 24.99, img: "https://source.unsplash.com/400x400/?kids-watch", desc: "Stylish watch for boys.", reviews: [] },
                { name: "Keychain", price: 9.99, img: "https://source.unsplash.com/400x400/?kids-keychain", desc: "Cute keychain for kids.", reviews: [] },
                { name: "Travel Toiletry Bag", price: 21.95, img: "https://source.unsplash.com/400x400/?kids-toiletry-bag", desc: "Organized for on-the-go grooming.", reviews: [] }
            ]
        },
    "electronics": {
        "laptops": [
            { name: "Dell XPS 13", price: 999.99, img: "https://example.com/xps13.jpg", desc: "Compact and powerful ultrabook.", reviews: [] },
            { name: "MacBook Air M2", price: 1199.00, img: "https://example.com/macbookair.jpg", desc: "Sleek Apple performance.", reviews: [] },
            { name: "HP Pavilion 15", price: 749.50, img: "https://example.com/hppavilion.jpg", desc: "Reliable everyday laptop.", reviews: [] },
            { name: "Lenovo IdeaPad Slim 5", price: 659.99, img: "https://example.com/ideapad.jpg", desc: "Balanced specs and portability.", reviews: [] },
            { name: "ASUS ROG Zephyrus G14", price: 1499.99, img: "https://example.com/zephyrus.jpg", desc: "Gaming powerhouse in a slim body.", reviews: [] },
            { name: "Acer Aspire 7", price: 899.99, img: "https://example.com/aspire7.jpg", desc: "Performance laptop for students.", reviews: [] },
            { name: "Microsoft Surface Laptop 5", price: 1099.00, img: "https://example.com/surface5.jpg", desc: "Premium design with Windows 11.", reviews: [] },
            { name: "Samsung Galaxy Book3", price: 949.99, img: "https://example.com/galaxybook.jpg", desc: "Samsung's Windows experience.", reviews: [] },
            { name: "LG Gram 16", price: 1399.99, img: "https://example.com/lggram.jpg", desc: "Ultra-light 16-inch productivity laptop.", reviews: [] },
            { name: "MSI Modern 14", price: 799.50, img: "https://example.com/msimodern.jpg", desc: "Stylish & efficient for work.", reviews: [] }
        ],
      
        "desktops": [
            { name: "iMac 24\" M1", price: 1299.99, img: "https://example.com/imac24.jpg", desc: "All-in-one sleek Apple desktop.", reviews: [] },
            { name: "Dell Inspiron Desktop", price: 649.99, img: "https://example.com/inspiron.jpg", desc: "Everyday performance tower.", reviews: [] },
            { name: "HP All-in-One PC", price: 799.50, img: "https://example.com/hpaio.jpg", desc: "Clean desktop setup.", reviews: [] },
            { name: "Lenovo Legion Tower 5", price: 1199.00, img: "https://example.com/legiontower.jpg", desc: "Gaming desktop with RTX graphics.", reviews: [] },
            { name: "Apple Mac Mini M2", price: 699.00, img: "https://example.com/macmini.jpg", desc: "Tiny but mighty desktop.", reviews: [] },
            { name: "ASUS ExpertCenter D7", price: 749.00, img: "https://example.com/expertcenter.jpg", desc: "Built for office environments.", reviews: [] },
            { name: "Acer Aspire C24 AIO", price: 829.99, img: "https://example.com/aspireaio.jpg", desc: "Slim bezel all-in-one.", reviews: [] },
            { name: "MSI PRO DP21", price: 599.50, img: "https://example.com/msidp21.jpg", desc: "Compact professional desktop.", reviews: [] },
            { name: "Intel NUC Mini PC", price: 499.00, img: "https://example.com/nuc.jpg", desc: "Tiny form-factor PC.", reviews: [] },
            { name: "Beelink Mini S12 Pro", price: 459.00, img: "https://example.com/beelink.jpg", desc: "Budget-friendly desktop solution.", reviews: [] }
        ],
      
        "tablets": [
            { name: "iPad 10th Gen", price: 449.99, img: "https://example.com/ipad10.jpg", desc: "All-around Apple tablet.", reviews: [] },
            { name: "Samsung Galaxy Tab S9", price: 799.99, img: "https://example.com/tabS9.jpg", desc: "Flagship Android tablet.", reviews: [] },
            { name: "Lenovo Tab P11 Pro", price: 399.00, img: "https://example.com/lenovotab.jpg", desc: "OLED display for entertainment.", reviews: [] },
            { name: "Microsoft Surface Pro 9", price: 1099.00, img: "https://example.com/surfacepro9.jpg", desc: "Tablet-laptop hybrid.", reviews: [] },
            { name: "Xiaomi Pad 6", price: 369.00, img: "https://example.com/miPad.jpg", desc: "Budget productivity tablet.", reviews: [] },
            { name: "Realme Pad X", price: 299.00, img: "https://example.com/realmepad.jpg", desc: "Affordable 5G tablet.", reviews: [] },
            { name: "Nokia T21", price: 219.00, img: "https://example.com/nokiaT21.jpg", desc: "Durable and kid-friendly.", reviews: [] },
            { name: "Amazon Fire HD 10", price: 179.00, img: "https://example.com/firehd.jpg", desc: "Affordable media tablet.", reviews: [] },
            { name: "Huawei MatePad 11", price: 429.00, img: "https://example.com/matepad.jpg", desc: "Smooth display with stylus.", reviews: [] },
            { name: "Teclast M40 Pro", price: 229.00, img: "https://example.com/teclast.jpg", desc: "Low-cost Android alternative.", reviews: [] }
        ],
      
        "monitors": [
            { name: "Dell 24 IPS Monitor", price: 139.99, img: "https://example.com/dellmonitor.jpg", desc: "Great color accuracy.", reviews: [] },
            { name: "LG UltraWide 29", price: 249.99, img: "https://example.com/lgultrawide.jpg", desc: "Extra space for multitasking.", reviews: [] },
            { name: "Samsung Curved 27", price: 199.99, img: "https://example.com/samsungcurved.jpg", desc: "Immersive curved display.", reviews: [] },
            { name: "ASUS TUF Gaming 165Hz", price: 299.00, img: "https://example.com/asusgaming.jpg", desc: "High refresh rate for gamers.", reviews: [] },
            { name: "BenQ Eye-Care Monitor", price: 189.00, img: "https://example.com/benqeye.jpg", desc: "Protects your eyes.", reviews: [] },
            { name: "Acer Nitro QG1", price: 169.99, img: "https://example.com/acernitro.jpg", desc: "Full HD with FreeSync.", reviews: [] },
            { name: "HP 23.8 Full HD", price: 159.99, img: "https://example.com/hpmonitor.jpg", desc: "Wide viewing angles.", reviews: [] },
            { name: "ViewSonic VX3276", price: 229.50, img: "https://example.com/viewsonic.jpg", desc: "32-inch borderless design.", reviews: [] },
            { name: "Lenovo L24i", price: 149.00, img: "https://example.com/lenovomonitor.jpg", desc: "Slim and elegant.", reviews: [] },
            { name: "MSI Pro MP241", price: 129.00, img: "https://example.com/msimonitor.jpg", desc: "Budget office display.", reviews: [] }
        ],
      
        "keyboards": [
            { name: "Logitech K380", price: 34.99, img: "https://example.com/k380.jpg", desc: "Bluetooth multi-device keyboard.", reviews: [] },
            { name: "Dell Wired Keyboard", price: 19.99, img: "https://example.com/dellkeyboard.jpg", desc: "Basic office use.", reviews: [] },
            { name: "HP Wireless Keyboard", price: 24.99, img: "https://example.com/hpkeyboard.jpg", desc: "Reliable wireless design.", reviews: [] },
            { name: "Redragon Mechanical RGB", price: 59.99, img: "https://example.com/redragon.jpg", desc: "Backlit mechanical keys.", reviews: [] },
            { name: "Apple Magic Keyboard", price: 99.00, img: "https://example.com/magickeyboard.jpg", desc: "Slim and sleek.", reviews: [] },
            { name: "Razer Cynosa V2", price: 69.99, img: "https://example.com/razer.jpg", desc: "Gaming-grade keyboard.", reviews: [] },
            { name: "Zebronics USB Keyboard", price: 14.99, img: "https://example.com/zebkeyboard.jpg", desc: "Affordable and functional.", reviews: [] },
            { name: "TVS Gold Keyboard", price: 42.99, img: "https://example.com/tvs.jpg", desc: "Heavy-duty typing.", reviews: [] },
            { name: "Cosmic Byte CB-GK-12", price: 48.99, img: "https://example.com/cosmic.jpg", desc: "RGB gaming keyboard.", reviews: [] },
            { name: "iBall Slim Keyboard", price: 21.00, img: "https://example.com/iball.jpg", desc: "Low-profile keys.", reviews: [] }
        ],
      
        "mouse": [
            { name: "Logitech M235 Wireless Mouse", price: 22.99, img: "https://example.com/m235.jpg", desc: "Compact and wireless.", reviews: [] },
            { name: "HP Wired Mouse X1000", price: 10.99, img: "https://example.com/hpmouse.jpg", desc: "Simple plug-and-play.", reviews: [] },
            { name: "Dell MS116 Mouse", price: 13.99, img: "https://example.com/dellmouse.jpg", desc: "Reliable office use.", reviews: [] },
            { name: "Logitech MX Master 3S", price: 99.99, img: "https://example.com/mxmaster.jpg", desc: "Pro-grade productivity.", reviews: [] },
            { name: "Redragon M602 RGB", price: 29.99, img: "https://example.com/redragonmouse.jpg", desc: "Gaming mouse with lights.", reviews: [] },
            { name: "Razer DeathAdder Essential", price: 39.99, img: "https://example.com/razerda.jpg", desc: "Ergonomic gaming choice.", reviews: [] },
            { name: "Zebronics Zeb-Transformer-M", price: 17.50, img: "https://example.com/zebmouse.jpg", desc: "Budget gamer favorite.", reviews: [] },
            { name: "Lenovo 400 Wireless Mouse", price: 25.00, img: "https://example.com/lenovomouse.jpg", desc: "Clean and compact.", reviews: [] },
            { name: "Apple Magic Mouse 2", price: 79.00, img: "https://example.com/magicmouse.jpg", desc: "Apple's multi-touch mouse.", reviews: [] },
            { name: "iBall FreeGo G50", price: 16.00, img: "https://example.com/iballmouse.jpg", desc: "Smooth wireless control.", reviews: [] }
        ],
        "externalHardDrives": [
            { name: "WD Elements 1TB", price: 54.99, img: "https://example.com/wd1tb.jpg", desc: "Reliable external HDD storage.", reviews: [] },
            { name: "Seagate Backup Plus 2TB", price: 69.99, img: "https://example.com/seagate2tb.jpg", desc: "High-speed USB 3.0 support.", reviews: [] },
            { name: "Toshiba Canvio Basics 1TB", price: 49.50, img: "https://example.com/toshiba1tb.jpg", desc: "Simple plug-and-play.", reviews: [] },
            { name: "WD My Passport 4TB", price: 119.00, img: "https://example.com/wd4tb.jpg", desc: "Compact encrypted storage.", reviews: [] },
            { name: "Seagate Expansion 5TB", price: 139.99, img: "https://example.com/seagate5tb.jpg", desc: "Massive portable storage.", reviews: [] },
            { name: "LaCie Rugged Mini 2TB", price: 109.00, img: "https://example.com/lacie.jpg", desc: "Shock and rain resistant.", reviews: [] },
            { name: "ADATA HV320 1TB", price: 46.99, img: "https://example.com/adatahv320.jpg", desc: "Slim and fast HDD.", reviews: [] },
            { name: "Transcend StoreJet 25H3", price: 64.75, img: "https://example.com/transcend.jpg", desc: "Military-grade shock protection.", reviews: [] },
            { name: "WD My Book 8TB", price: 179.00, img: "https://example.com/wdmybook.jpg", desc: "Desktop backup solution.", reviews: [] },
            { name: "Seagate One Touch 1TB", price: 59.99, img: "https://example.com/seagateonetouch.jpg", desc: "Sleek fabric design.", reviews: [] }
        ],
    
        "ssds": [
            { name: "Samsung T7 500GB", price: 89.99, img: "https://example.com/t7.jpg", desc: "Blazing fast portable SSD.", reviews: [] },
            { name: "SanDisk Extreme 1TB", price: 129.99, img: "https://example.com/extreme1tb.jpg", desc: "High-performance NVMe.", reviews: [] },
            { name: "Crucial X8 1TB", price: 109.99, img: "https://example.com/x8.jpg", desc: "Durable high-speed SSD.", reviews: [] },
            { name: "WD My Passport SSD 1TB", price: 139.99, img: "https://example.com/wdssd.jpg", desc: "Fast and compact.", reviews: [] },
            { name: "ADATA SE800 512GB", price: 89.50, img: "https://example.com/se800.jpg", desc: "Waterproof and rugged.", reviews: [] },
            { name: "Kingston XS2000 1TB", price: 119.99, img: "https://example.com/xs2000.jpg", desc: "Tiny size, huge speed.", reviews: [] },
            { name: "Transcend ESD370C 1TB", price: 124.00, img: "https://example.com/esd370c.jpg", desc: "Rubber case protection.", reviews: [] },
            { name: "Seagate Fast SSD 500GB", price: 79.00, img: "https://example.com/fastssd.jpg", desc: "Slim & light design.", reviews: [] },
            { name: "LaCie Portable SSD 1TB", price: 159.00, img: "https://example.com/laciessd.jpg", desc: "Premium style and speed.", reviews: [] },
            { name: "WD Elements SE SSD 1TB", price: 109.00, img: "https://example.com/elementssd.jpg", desc: "Affordable solid performance.", reviews: [] }
        ],
    
        "penDrives": [
            { name: "SanDisk Ultra 64GB", price: 12.99, img: "https://example.com/ultra64.jpg", desc: "USB 3.0, fast transfer.", reviews: [] },
            { name: "HP x765w 128GB", price: 17.99, img: "https://example.com/hpx765.jpg", desc: "Sturdy metal body.", reviews: [] },
            { name: "Strontium Nitro 32GB", price: 7.99, img: "https://example.com/strontium.jpg", desc: "Compact and colorful.", reviews: [] },
            { name: "Samsung BAR Plus 64GB", price: 15.99, img: "https://example.com/barplus.jpg", desc: "Metal casing USB 3.1.", reviews: [] },
            { name: "Kingston DataTraveler 100 G3", price: 9.99, img: "https://example.com/kingstondt.jpg", desc: "Classic black pen drive.", reviews: [] },
            { name: "Sony USM 64GB", price: 11.50, img: "https://example.com/sonyusb.jpg", desc: "Retractable USB connector.", reviews: [] },
            { name: "SanDisk Dual Drive 128GB", price: 19.99, img: "https://example.com/dualdrive.jpg", desc: "USB-A & USB-C combo.", reviews: [] },
            { name: "HP v236w 64GB", price: 10.99, img: "https://example.com/v236w.jpg", desc: "Sleek metallic finish.", reviews: [] },
            { name: "Corsair Flash Voyager", price: 24.99, img: "https://example.com/voyager.jpg", desc: "Rugged rubber housing.", reviews: [] },
            { name: "PNY Turbo 256GB", price: 39.99, img: "https://example.com/pnyturbo.jpg", desc: "Large capacity with speed.", reviews: [] }
        ],
    
        "printers": [
          { name: "HP DeskJet 2331", price: 49.99, img: "https://example.com/hp2331.jpg", desc: "All-in-one color printer.", reviews: [] },
          { name: "Canon PIXMA MG2577s", price: 55.00, img: "https://example.com/pixma.jpg", desc: "Compact and affordable.", reviews: [] },
          { name: "Epson EcoTank L3211", price: 199.00, img: "https://example.com/l3211.jpg", desc: "Refillable ink tank printer.", reviews: [] },
          { name: "Brother HL-L2321D", price: 139.00, img: "https://example.com/brother.jpg", desc: "Monochrome laser with duplex.", reviews: [] },
          { name: "HP LaserJet 1020 Plus", price: 159.00, img: "https://example.com/laserjet.jpg", desc: "Reliable laser printing.", reviews: [] },
          { name: "Canon i-SENSYS LBP6030B", price: 89.99, img: "https://example.com/sensys.jpg", desc: "Simple and speedy laser.", reviews: [] },
          { name: "Samsung Xpress SL-M2021", price: 99.00, img: "https://example.com/xpress.jpg", desc: "Efficient mono printer.", reviews: [] },
          { name: "Pantum P2500W", price: 89.00, img: "https://example.com/pantum.jpg", desc: "Budget laser with Wi-Fi.", reviews: [] },
          { name: "HP Smart Tank 516", price: 199.50, img: "https://example.com/smarttank.jpg", desc: "Wireless ink tank printer.", reviews: [] },
          { name: "Epson L3252 Wi-Fi", price: 229.00, img: "https://example.com/epsonwifi.jpg", desc: "Compact wireless color printer.", reviews: [] }
        ],
    
        "scanners": [
          { name: "Canon LiDE 300", price: 69.99, img: "https://example.com/lide300.jpg", desc: "Flatbed color scanner.", reviews: [] },
          { name: "Epson Perfection V39", price: 89.99, img: "https://example.com/v39.jpg", desc: "Scan photos & docs.", reviews: [] },
          { name: "HP ScanJet Pro 2000", price: 269.00, img: "https://example.com/hpscanjet.jpg", desc: "Fast document feeder scanner.", reviews: [] },
          { name: "Canon DR-F120", price: 289.99, img: "https://example.com/drf120.jpg", desc: "Versatile scanner.", reviews: [] },
          { name: "Fujitsu ScanSnap iX1600", price: 399.00, img: "https://example.com/scansnap.jpg", desc: "High-speed smart scanner.", reviews: [] },
          { name: "Brother ADS-2200", price: 349.00, img: "https://example.com/ads2200.jpg", desc: "Compact duplex document scanner.", reviews: [] },
          { name: "Plustek Photo Scanner", price: 129.99, img: "https://example.com/plustek.jpg", desc: "Perfect for archiving photos.", reviews: [] },
          { name: "IRISCan Book 5", price: 149.99, img: "https://example.com/iriscan.jpg", desc: "Portable handheld scanner.", reviews: [] },
          { name: "CZUR Shine Ultra Pro", price: 259.00, img: "https://example.com/czur.jpg", desc: "Document camera scanner.", reviews: [] },
          { name: "Epson DS-1630", price: 299.00, img: "https://example.com/ds1630.jpg", desc: "Flatbed + ADF hybrid.", reviews: [] }
        ],
        "smartphones": [
            { name: "iPhone 14", price: 799.99, img: "https://example.com/iphone14.jpg", desc: "Powerful iOS smartphone with A15 chip.", reviews: [] },
            { name: "Samsung Galaxy S23", price: 749.99, img: "https://example.com/galaxys23.jpg", desc: "Flagship Android with dynamic AMOLED.", reviews: [] },
            { name: "Google Pixel 7", price: 699.00, img: "https://example.com/pixel7.jpg", desc: "Stock Android and top camera.", reviews: [] },
            { name: "OnePlus 11", price: 729.99, img: "https://example.com/oneplus11.jpg", desc: "Fast performance and sleek design.", reviews: [] },
            { name: "iQOO Neo 7", price: 499.00, img: "https://example.com/iqoo7.jpg", desc: "Gaming optimized smartphone.", reviews: [] },
            { name: "Realme GT Neo 3", price: 469.99, img: "https://example.com/realmegt.jpg", desc: "Mid-range with flagship features.", reviews: [] },
            { name: "Xiaomi 13 Pro", price: 899.99, img: "https://example.com/xiaomi13.jpg", desc: "Leica-powered photography.", reviews: [] },
            { name: "Vivo V27", price: 459.99, img: "https://example.com/vivo27.jpg", desc: "Color-changing back panel.", reviews: [] },
            { name: "Motorola Edge 40", price: 579.00, img: "https://example.com/motoedge.jpg", desc: "Curved display at mid-range.", reviews: [] },
            { name: "Nothing Phone (2)", price: 699.00, img: "https://example.com/nothing2.jpg", desc: "Unique glyph interface.", reviews: [] }
        ],
      
        "smartWatches": [
            { name: "Apple Watch Series 8", price: 399.00, img: "https://example.com/applewatch8.jpg", desc: "Health-focused smartwatch.", reviews: [] },
            { name: "Samsung Galaxy Watch 5", price: 279.99, img: "https://example.com/galaxywatch5.jpg", desc: "Advanced tracking and Wear OS.", reviews: [] },
            { name: "Fitbit Versa 4", price: 199.00, img: "https://example.com/versa4.jpg", desc: "Fitness & sleep tracking.", reviews: [] },
            { name: "Garmin Venu Sq", price: 179.99, img: "https://example.com/garminvenu.jpg", desc: "Built-in GPS & AMOLED.", reviews: [] },
            { name: "Amazfit GTR 4", price: 169.99, img: "https://example.com/amazfitgtr.jpg", desc: "14-day battery life.", reviews: [] },
            { name: "Realme Watch 3 Pro", price: 89.99, img: "https://example.com/realmewatch.jpg", desc: "Affordable and functional.", reviews: [] },
            { name: "Noise ColorFit Ultra 2", price: 79.00, img: "https://example.com/noisecolorfit.jpg", desc: "Big display, metal body.", reviews: [] },
            { name: "Fire-Boltt Phoenix", price: 59.00, img: "https://example.com/fireboltt.jpg", desc: "Bluetooth calling feature.", reviews: [] },
            { name: "Boat Xtend Pro", price: 69.00, img: "https://example.com/boatextend.jpg", desc: "Smart features at great value.", reviews: [] },
            { name: "Fossil Gen 6", price: 279.99, img: "https://example.com/fossilgen6.jpg", desc: "Premium Wear OS watch.", reviews: [] }
        ],
      
        "fitnessTrackers": [
            { name: "Xiaomi Mi Band 7", price: 49.99, img: "https://example.com/miband7.jpg", desc: "Popular budget fitness tracker.", reviews: [] },
            { name: "Honor Band 6", price: 39.99, img: "https://example.com/honorband.jpg", desc: "Large AMOLED screen.", reviews: [] },
            { name: "OnePlus Band", price: 34.99, img: "https://example.com/oneplusband.jpg", desc: "SpO2 and sleep tracking.", reviews: [] },
            { name: "Realme Band 2", price: 36.00, img: "https://example.com/realmeband.jpg", desc: "Smart fitness features.", reviews: [] },
            { name: "Redmi Smart Band Pro", price: 45.00, img: "https://example.com/redmiband.jpg", desc: "Always-on AMOLED.", reviews: [] },
            { name: "Boat Smart Band Pro", price: 32.50, img: "https://example.com/boatband.jpg", desc: "Budget wellness tracker.", reviews: [] },
            { name: "GOQii Vital 4.0", price: 59.00, img: "https://example.com/goqii.jpg", desc: "Health coaching included.", reviews: [] },
            { name: "Fitbit Inspire 3", price: 89.00, img: "https://example.com/inspire3.jpg", desc: "Long battery life.", reviews: [] },
            { name: "Huawei Band 7", price: 54.99, img: "https://example.com/huaweiband.jpg", desc: "Slim and smart.", reviews: [] },
            { name: "Samsung Galaxy Fit 2", price: 49.00, img: "https://example.com/fit2.jpg", desc: "Stylish & practical.", reviews: [] }
        ],
      
        "mobileChargers": [
            { name: "Apple 20W USB-C Charger", price: 24.99, img: "https://example.com/apple20w.jpg", desc: "Fast charge your iPhone.", reviews: [] },
            { name: "Samsung 25W Charger", price: 21.99, img: "https://example.com/samsung25w.jpg", desc: "Super fast charging.", reviews: [] },
            { name: "Realme 33W Dart Charger", price: 18.50, img: "https://example.com/dartcharger.jpg", desc: "Quick and safe.", reviews: [] },
            { name: "Boat 18W Charger", price: 14.99, img: "https://example.com/boatcharger.jpg", desc: "Compact and efficient.", reviews: [] },
            { name: "Mi 27W Sonic Charge Adapter", price: 19.99, img: "https://example.com/micharger.jpg", desc: "Great for fast devices.", reviews: [] },
            { name: "Anker 20W Nano", price: 22.00, img: "https://example.com/anker.jpg", desc: "Compact powerhouse.", reviews: [] },
            { name: "Spigen 27W Charger", price: 23.50, img: "https://example.com/spigen.jpg", desc: "Sleek and modern.", reviews: [] },
            { name: "Portronics Adapto 22", price: 15.99, img: "https://example.com/portronics.jpg", desc: "Dual USB charger.", reviews: [] },
            { name: "Zebronics ZEB-MC12000", price: 12.99, img: "https://example.com/zebronics.jpg", desc: "Affordable power.", reviews: [] },
            { name: "Stuffcool 65W PD Charger", price: 49.99, img: "https://example.com/stuffcool.jpg", desc: "Laptop & phone charging.", reviews: [] }
        ],
        "mobileCables": [
            { name: "Anker PowerLine USB-C", price: 12.99, img: "https://example.com/anker-cable.jpg", desc: "Durable fast-charging cable.", reviews: [] },
            { name: "AmazonBasics Lightning Cable", price: 10.99, img: "https://example.com/amazon-lightning.jpg", desc: "Certified MFi lightning cable.", reviews: [] },
            { name: "Boat Micro USB Cable", price: 5.99, img: "https://example.com/boat-microusb.jpg", desc: "Tangle-free charging cable.", reviews: [] },
            { name: "Portronics Type-C Cable", price: 6.99, img: "https://example.com/portronics-typec.jpg", desc: "Quick sync and charge.", reviews: [] },
            { name: "MI Braided USB Cable", price: 7.50, img: "https://example.com/mi-braided.jpg", desc: "Strong and long-lasting.", reviews: [] },
            { name: "Samsung USB-C Cable", price: 9.99, img: "https://example.com/samsung-c.jpg", desc: "Original Samsung cable.", reviews: [] },
            { name: "Syska USB Fast Cable", price: 4.99, img: "https://example.com/syska-usb.jpg", desc: "Affordable 2A cable.", reviews: [] },
            { name: "Stuffcool Flow Lightning Cable", price: 13.99, img: "https://example.com/stuffcool.jpg", desc: "Fast Apple charging.", reviews: [] },
            { name: "Zebronics Charging Cable", price: 6.50, img: "https://example.com/zebronics-cable.jpg", desc: "Reliable and durable.", reviews: [] },
            { name: "Spigen DuraSync USB-C", price: 14.99, img: "https://example.com/spigen-usbc.jpg", desc: "Premium charging cable.", reviews: [] }
        ],
      
        "powerBanks": [
            { name: "MI Power Bank 3i 10000mAh", price: 24.99, img: "https://example.com/mi-powerbank.jpg", desc: "Dual output fast charging.", reviews: [] },
            { name: "Realme 20000mAh Power Bank", price: 34.99, img: "https://example.com/realme-powerbank.jpg", desc: "High capacity fast charge.", reviews: [] },
            { name: "Ambrane 15000mAh", price: 28.50, img: "https://example.com/ambrane.jpg", desc: "Compact with LED display.", reviews: [] },
            { name: "OnePlus 10000mAh Power Bank", price: 29.99, img: "https://example.com/oneplus-pb.jpg", desc: "Stylish and portable.", reviews: [] },
            { name: "Anker PowerCore 20100", price: 49.99, img: "https://example.com/anker-pb.jpg", desc: "Reliable brand and capacity.", reviews: [] },
            { name: "Samsung 10000mAh Power Bank", price: 31.99, img: "https://example.com/samsung-pb.jpg", desc: "Slim and powerful.", reviews: [] },
            { name: "URBN 10000mAh Power Bank", price: 22.50, img: "https://example.com/urbn-pb.jpg", desc: "Made in India, fast charging.", reviews: [] },
            { name: "Zebronics Zeb-MD10000", price: 21.00, img: "https://example.com/zeb-pb.jpg", desc: "Pocket-sized backup.", reviews: [] },
            { name: "Stuffcool Power Bank 20000mAh", price: 39.99, img: "https://example.com/stuffcool-pb.jpg", desc: "Heavy duty use.", reviews: [] },
            { name: "Portronics Power Pro 10K", price: 25.99, img: "https://example.com/portronics-pb.jpg", desc: "Affordable high performance.", reviews: [] }
        ],
      
        "phoneCases": [
            { name: "Spigen Rugged Armor Case (iPhone)", price: 18.99, img: "https://example.com/spigen-case.jpg", desc: "Military-grade protection.", reviews: [] },
            { name: "Ringke Fusion Case (Samsung)", price: 16.50, img: "https://example.com/ringke-case.jpg", desc: "Clear back protective case.", reviews: [] },
            { name: "OtterBox Defender Case", price: 24.99, img: "https://example.com/otterbox.jpg", desc: "Ultimate drop protection.", reviews: [] },
            { name: "Realme Silicone Back Cover", price: 9.99, img: "https://example.com/realme-case.jpg", desc: "Soft and flexible.", reviews: [] },
            { name: "OnePlus Sandstone Case", price: 11.99, img: "https://example.com/oneplus-case.jpg", desc: "Iconic grip texture.", reviews: [] },
            { name: "Apple Leather Case", price: 39.00, img: "https://example.com/apple-leather.jpg", desc: "Premium feel and look.", reviews: [] },
            { name: "Boat Armor Case", price: 12.50, img: "https://example.com/boat-case.jpg", desc: "Rugged and sleek.", reviews: [] },
            { name: "Caseology Skyfall Case", price: 17.75, img: "https://example.com/skyfall.jpg", desc: "Elegant transparent design.", reviews: [] },
            { name: "Zebronics Gel Case", price: 6.99, img: "https://example.com/zeb-case.jpg", desc: "Lightweight daily use case.", reviews: [] },
            { name: "Portronics Designer Back Cover", price: 10.99, img: "https://example.com/portronics-case.jpg", desc: "Trendy designs.", reviews: [] }
        ],
      
        "screenProtectors": [
            { name: "Spigen Tempered Glass (iPhone)", price: 14.99, img: "https://example.com/spigen-glass.jpg", desc: "Crystal clear screen guard.", reviews: [] },
            { name: "Case U Tempered Glass (Samsung)", price: 12.50, img: "https://example.com/caseu-glass.jpg", desc: "Edge-to-edge protection.", reviews: [] },
            { name: "Gorilla Armor Glass (Realme)", price: 9.99, img: "https://example.com/gorilla-glass.jpg", desc: "High hardness rating.", reviews: [] },
            { name: "OnePlus 9R Glass Protector", price: 11.00, img: "https://example.com/oneplus-glass.jpg", desc: "Scratch resistant.", reviews: [] },
            { name: "MI Screen Guard", price: 7.99, img: "https://example.com/mi-guard.jpg", desc: "Affordable tempered glass.", reviews: [] },
            { name: "Boat Privacy Glass", price: 13.00, img: "https://example.com/boat-glass.jpg", desc: "Anti-spy feature.", reviews: [] },
            { name: "Portronics HD Tempered", price: 10.99, img: "https://example.com/portronics-glass.jpg", desc: "HD view clarity.", reviews: [] },
            { name: "Ringke Dual Easy Glass", price: 15.00, img: "https://example.com/ringke-glass.jpg", desc: "Easy installation.", reviews: [] },
            { name: "Zagg InvisibleShield Glass", price: 22.99, img: "https://example.com/zagg-glass.jpg", desc: "Lifetime warranty.", reviews: [] },
            { name: "Stuffcool Edge Glass", price: 13.99, img: "https://example.com/stuffcool-glass.jpg", desc: "Edge protected layer.", reviews: [] }
        ],
        "bluetoothEarphones": [
            { name: "Apple AirPods Pro", price: 249.99, img: "https://example.com/airpodspro.jpg", desc: "Active noise cancellation, spatial audio.", reviews: [] },
            { name: "Samsung Galaxy Buds 2", price: 149.99, img: "https://example.com/galaxybuds2.jpg", desc: "Balanced sound and ANC.", reviews: [] },
            { name: "Sony WF-1000XM4", price: 279.99, img: "https://example.com/sonybuds.jpg", desc: "Top-tier ANC and battery life.", reviews: [] },
            { name: "Boat Airdopes 441", price: 39.99, img: "https://example.com/boat441.jpg", desc: "Affordable and stylish.", reviews: [] },
            { name: "Realme Buds Air 3", price: 59.99, img: "https://example.com/realmebuds.jpg", desc: "Budget ANC earbuds.", reviews: [] },
            { name: "OnePlus Buds Z2", price: 69.99, img: "https://example.com/oneplusz2.jpg", desc: "Dolby Atmos support.", reviews: [] },
            { name: "JBL Tune 230NC", price: 79.99, img: "https://example.com/jbl230.jpg", desc: "JBL Pure Bass sound.", reviews: [] },
            { name: "Noise Buds VS104", price: 29.99, img: "https://example.com/noisevs.jpg", desc: "Environmental noise canceling.", reviews: [] },
            { name: "Boult Audio AirBass", price: 34.99, img: "https://example.com/boultbass.jpg", desc: "Touch controls & IPX5.", reviews: [] },
            { name: "OPPO Enco Air 2 Pro", price: 49.99, img: "https://example.com/oppoenco.jpg", desc: "Deep bass and comfort fit.", reviews: [] }
        ],
      
        "bluetoothHeadphones": [
            { name: "Sony WH-1000XM5", price: 349.99, img: "https://example.com/sonyxm5.jpg", desc: "Industry leading noise canceling.", reviews: [] },
            { name: "Bose QuietComfort 45", price: 329.00, img: "https://example.com/boseqc45.jpg", desc: "Comfortable and balanced audio.", reviews: [] },
            { name: "JBL Tune 760NC", price: 129.99, img: "https://example.com/jbl760.jpg", desc: "Noise cancellation on budget.", reviews: [] },
            { name: "Boat Rockerz 550", price: 49.99, img: "https://example.com/boat550.jpg", desc: "Long battery life.", reviews: [] },
            { name: "Boult Audio ProBass", price: 44.00, img: "https://example.com/boultprobass.jpg", desc: "Rich bass performance.", reviews: [] },
            { name: "Sennheiser HD 450BT", price: 149.99, img: "https://example.com/sennheiser450.jpg", desc: "Premium build and sound.", reviews: [] },
            { name: "Skullcandy Crusher Evo", price: 179.99, img: "https://example.com/skullcandycrusher.jpg", desc: "Adjustable bass slider.", reviews: [] },
            { name: "Noise Defy", price: 59.00, img: "https://example.com/noisedefy.jpg", desc: "Hybrid ANC headset.", reviews: [] },
            { name: "Zebronics Zeb-Duke", price: 39.00, img: "https://example.com/zebduke.jpg", desc: "Stylish with mic support.", reviews: [] },
            { name: "Realme Wireless Headphones", price: 64.99, img: "https://example.com/realmeheadset.jpg", desc: "Comfort fit for long hours.", reviews: [] }
        ],
      
        "wiredHeadphones": [
            { name: "Sony MDR-ZX110", price: 19.99, img: "https://example.com/sony110.jpg", desc: "Clear sound and light weight.", reviews: [] },
            { name: "Sennheiser HD 206", price: 39.99, img: "https://example.com/sennheiser206.jpg", desc: "Studio quality output.", reviews: [] },
            { name: "JBL C300SI", price: 25.00, img: "https://example.com/jbl300.jpg", desc: "Powerful bass.", reviews: [] },
            { name: "Boat Bassheads 900", price: 22.00, img: "https://example.com/boat900.jpg", desc: "Foldable and strong.", reviews: [] },
            { name: "Audio-Technica ATH-M20X", price: 59.99, img: "https://example.com/athm20x.jpg", desc: "Accurate bass response.", reviews: [] },
            { name: "Philips SHL5000", price: 18.00, img: "https://example.com/philips5000.jpg", desc: "Light and compact.", reviews: [] },
            { name: "Zebronics Zeb-Rush", price: 16.99, img: "https://example.com/zebrush.jpg", desc: "Basic utility headset.", reviews: [] },
            { name: "Marshall Major III", price: 69.99, img: "https://example.com/marshall3.jpg", desc: "Iconic vintage look.", reviews: [] },
            { name: "Koss Porta Pro", price: 49.99, img: "https://example.com/kossporta.jpg", desc: "Compact and retro.", reviews: [] },
            { name: "AKG K52", price: 59.00, img: "https://example.com/akg52.jpg", desc: "Professional sound.", reviews: [] }
        ],
      
        "bluetoothSpeakers": [
            { name: "JBL Flip 6", price: 129.99, img: "https://example.com/jblflip6.jpg", desc: "Waterproof and powerful.", reviews: [] },
            { name: "Boat Stone 1200", price: 64.99, img: "https://example.com/boatstone.jpg", desc: "RGB and rugged.", reviews: [] },
            { name: "Sony SRS-XB13", price: 49.99, img: "https://example.com/sonysrs.jpg", desc: "Compact with extra bass.", reviews: [] },
            { name: "Bose SoundLink Flex", price: 149.99, img: "https://example.com/boseflex.jpg", desc: "Crisp and clear sound.", reviews: [] },
            { name: "MI Portable Speaker", price: 39.00, img: "https://example.com/mispeaker.jpg", desc: "Dual EQ modes.", reviews: [] },
            { name: "Zebronics Zeb-County", price: 24.99, img: "https://example.com/zebcounty.jpg", desc: "Affordable and loud.", reviews: [] },
            { name: "Realme Cobble Speaker", price: 34.50, img: "https://example.com/realmecobble.jpg", desc: "Portable and punchy.", reviews: [] },
            { name: "Portronics SoundDrum", price: 44.99, img: "https://example.com/portdrum.jpg", desc: "360-degree surround.", reviews: [] },
            { name: "Infinity Fuze 100", price: 29.99, img: "https://example.com/fuze100.jpg", desc: "IPX7 waterproof.", reviews: [] },
            { name: "Marshall Emberton", price: 149.00, img: "https://example.com/emberton.jpg", desc: "Retro portable speaker.", reviews: [] }
        ],
      
        "homeTheaters": [
            { name: "Sony HT-IV300 5.1", price: 349.99, img: "https://example.com/sonyht.jpg", desc: "True surround experience.", reviews: [] },
            { name: "Zebronics Zeb-Juke Bar 9400", price: 229.99, img: "https://example.com/zebbar.jpg", desc: "Powerful with subwoofer.", reviews: [] },
            { name: "Boat Aavante Bar 3100D", price: 199.99, img: "https://example.com/aavante.jpg", desc: "Dolby Digital with HDMI.", reviews: [] },
            { name: "Philips SPA8000B", price: 259.00, img: "https://example.com/philips8000.jpg", desc: "Bluetooth and 120W RMS.", reviews: [] },
            { name: "F&D F3800X 5.1", price: 189.99, img: "https://example.com/fd3800.jpg", desc: "LED display & remote.", reviews: [] },
            { name: "JBL Bar 2.1", price: 299.99, img: "https://example.com/jblbar.jpg", desc: "Powerful soundbar system.", reviews: [] },
            { name: "LG LHD657", price: 399.99, img: "https://example.com/lg657.jpg", desc: "DVD & HDMI support.", reviews: [] },
            { name: "Samsung T45E", price: 279.00, img: "https://example.com/samsungt.jpg", desc: "Wireless subwoofer.", reviews: [] },
            { name: "Blaupunkt SBW100", price: 149.00, img: "https://example.com/blaupunkt.jpg", desc: "German quality audio.", reviews: [] },
            { name: "Portronics Sound Slick II", price: 89.99, img: "https://example.com/slick2.jpg", desc: "Value-for-money bar.", reviews: [] }
        ],
      
        "microphones": [
            { name: "Blue Yeti USB Mic", price: 129.99, img: "https://example.com/yetimic.jpg", desc: "Professional podcast mic.", reviews: [] },
            { name: "Rode NT-USB Mini", price: 99.99, img: "https://example.com/rodemini.jpg", desc: "Compact and high clarity.", reviews: [] },
            { name: "Fifine K670", price: 59.99, img: "https://example.com/fifine.jpg", desc: "Best budget mic.", reviews: [] },
            { name: "Audio-Technica AT2020", price: 109.99, img: "https://example.com/at2020.jpg", desc: "Studio recording quality.", reviews: [] },
            { name: "Maono AU-A04", price: 69.99, img: "https://example.com/maono.jpg", desc: "USB condenser mic kit.", reviews: [] },
            { name: "Boya BY-M1", price: 19.99, img: "https://example.com/boyam1.jpg", desc: "Clip-on lavalier mic.", reviews: [] },
            { name: "Shure MV5", price: 119.99, img: "https://example.com/shuremv5.jpg", desc: "Compact iOS mic.", reviews: [] },
            { name: "Samson Meteor Mic", price: 89.00, img: "https://example.com/meteor.jpg", desc: "Great for streaming.", reviews: [] },
            { name: "JBL Commercial CSUM10", price: 39.99, img: "https://example.com/jblmic.jpg", desc: "Affordable condenser.", reviews: [] },
            { name: "Razer Seiren Mini", price: 49.99, img: "https://example.com/razermic.jpg", desc: "Gaming and compact.", reviews: [] }
        ],
      
        "audioInterfaces": [
            { name: "Focusrite Scarlett 2i2", price: 169.99, img: "https://example.com/focusrite.jpg", desc: "Top-tier audio production.", reviews: [] },
            { name: "Behringer UMC22", price: 49.99, img: "https://example.com/behringer.jpg", desc: "Entry-level for creators.", reviews: [] },
            { name: "PreSonus AudioBox USB 96", price: 99.00, img: "https://example.com/presonus.jpg", desc: "For home studio setups.", reviews: [] },
            { name: "M-Audio M-Track Solo", price: 69.99, img: "https://example.com/maudio.jpg", desc: "Beginner audio interface.", reviews: [] },
            { name: "Steinberg UR22C", price: 129.00, img: "https://example.com/steinberg.jpg", desc: "24-bit/192kHz resolution.", reviews: [] },
            { name: "MOTU M2 USB-C", price: 169.99, img: "https://example.com/motu.jpg", desc: "Loopback and clear monitoring.", reviews: [] },
            { name: "Tascam US-1x2HR", price: 89.99, img: "https://example.com/tascam.jpg", desc: "Compact and powerful.", reviews: [] },
            { name: "Audient EVO 4", price: 119.99, img: "https://example.com/evo.jpg", desc: "Smart gain technology.", reviews: [] },
            { name: "Roland GO:MIXER PRO", price: 139.99, img: "https://example.com/gomixer.jpg", desc: "Mobile audio mixer.", reviews: [] },
            { name: "IK Multimedia iRig HD 2", price: 99.99, img: "https://example.com/irig.jpg", desc: "Guitar & mobile recording.", reviews: [] }
        ],
        "ledSmartTVs": [
            { name: "Samsung 55 QLED Smart TV", price: 799.99, img: "https://example.com/samsungqled.jpg", desc: "4K UHD QLED with HDR10+.", reviews: [] },
            { name: "Sony Bravia 65 OLED", price: 1599.00, img: "https://example.com/sonybravia.jpg", desc: "Cinematic Dolby Vision.", reviews: [] },
            { name: "LG 55 NanoCell TV", price: 899.99, img: "https://example.com/lgnanocell.jpg", desc: "AI-enhanced picture and sound.", reviews: [] },
            { name: "OnePlus 50 Y Series", price: 479.99, img: "https://example.com/oneplusy.jpg", desc: "Smart TV with bezel-less design.", reviews: [] },
            { name: "TCL 43 4K UHD", price: 349.99, img: "https://example.com/tcl43.jpg", desc: "Built-in Roku and HDR.", reviews: [] },
            { name: "Mi 55 Smart TV 5X", price: 599.00, img: "https://example.com/mi5x.jpg", desc: "Dolby Vision and Android TV.", reviews: [] },
            { name: "VU 65 Premium 4K", price: 729.00, img: "https://example.com/vu65.jpg", desc: "Ultra HD with vivid picture.", reviews: [] },
            { name: "Hisense 50 LED", price: 399.99, img: "https://example.com/hisense50.jpg", desc: "Smooth motion and voice control.", reviews: [] },
            { name: "Panasonic 43 Android TV", price: 429.00, img: "https://example.com/panasonic43.jpg", desc: "HDR and Google Assistant.", reviews: [] },
            { name: "Realme 32 Smart LED TV", price: 199.99, img: "https://example.com/realme32.jpg", desc: "Compact HD-ready TV.", reviews: [] }
        ],
      
        "streamingDevices": [
            { name: "Amazon Fire TV Stick 4K", price: 49.99, img: "https://example.com/firestick.jpg", desc: "Voice control with Alexa.", reviews: [] },
            { name: "Google Chromecast with Google TV", price: 59.99, img: "https://example.com/chromecast.jpg", desc: "Personalized Android interface.", reviews: [] },
            { name: "Apple TV 4K", price: 179.99, img: "https://example.com/appletv.jpg", desc: "Dolby Vision and Apple Arcade.", reviews: [] },
            { name: "Realme 4K Smart Stick", price: 34.99, img: "https://example.com/realmestick.jpg", desc: "Affordable Android streaming.", reviews: [] },
            { name: "Mi TV Stick", price: 29.99, img: "https://example.com/mitvstick.jpg", desc: "Full HD Android streaming.", reviews: [] },
            { name: "Nvidia Shield TV Pro", price: 199.00, img: "https://example.com/nvidia.jpg", desc: "AI-enhanced upscaling.", reviews: [] },
            { name: "Tata Play Binge Stick", price: 39.99, img: "https://example.com/tataplay.jpg", desc: "Live TV + streaming.", reviews: [] },
            { name: "Airtel Xstream Stick", price: 44.99, img: "https://example.com/airtelstick.jpg", desc: "Remote with voice assistant.", reviews: [] },
            { name: "Roku Express HD", price: 27.00, img: "https://example.com/roku.jpg", desc: "Plug and play streaming.", reviews: [] },
            { name: "CloudWalker Android TV Stick", price: 32.99, img: "https://example.com/cloudwalker.jpg", desc: "Multiscreen casting.", reviews: [] }
        ],
      
        "projectors": [
            { name: "Epson EH-TW750", price: 649.00, img: "https://example.com/epson.jpg", desc: "Full HD with wireless screen mirroring.", reviews: [] },
            { name: "BenQ MS535P", price: 499.99, img: "https://example.com/benq.jpg", desc: "High brightness SVGA projector.", reviews: [] },
            { name: "ViewSonic M1 Mini Plus", price: 299.99, img: "https://example.com/viewsonic.jpg", desc: "Portable and smart.", reviews: [] },
            { name: "XGIMI MoGo Pro", price: 399.00, img: "https://example.com/xgimi.jpg", desc: "1080p with Android TV.", reviews: [] },
            { name: "Mi Smart Compact Projector", price: 499.00, img: "https://example.com/miprojector.jpg", desc: "Auto-focus and voice control.", reviews: [] },
            { name: "Egate i9 Pro Max", price: 179.99, img: "https://example.com/egate.jpg", desc: "Budget HD projector.", reviews: [] },
            { name: "Wzatco S6 Android Projector", price: 289.99, img: "https://example.com/wzatco.jpg", desc: "Smart home theater.", reviews: [] },
            { name: "VANKYO Leisure 470", price: 229.00, img: "https://example.com/vankyo.jpg", desc: "Wireless screen mirroring.", reviews: [] },
            { name: "Artlii Energon 2", price: 369.99, img: "https://example.com/artlii.jpg", desc: "4K support and Bluetooth.", reviews: [] },
            { name: "Anker Nebula Capsule", price: 429.99, img: "https://example.com/nebula.jpg", desc: "Pocket-size cinema.", reviews: [] }
        ],
      
        "gamingConsoles": [
            { name: "Sony PlayStation 5", price: 499.99, img: "https://example.com/ps5.jpg", desc: "Next-gen gaming power.", reviews: [] },
            { name: "Microsoft Xbox Series X", price: 499.00, img: "https://example.com/xboxx.jpg", desc: "Ultra-fast loading.", reviews: [] },
            { name: "Nintendo Switch OLED", price: 349.99, img: "https://example.com/switcholed.jpg", desc: "Portable and vibrant.", reviews: [] },
            { name: "PlayStation 4 Slim", price: 299.99, img: "https://example.com/ps4.jpg", desc: "Still a favorite.", reviews: [] },
            { name: "Xbox Series S", price: 299.00, img: "https://example.com/xboxs.jpg", desc: "Compact next-gen console.", reviews: [] },
            { name: "Steam Deck", price: 399.99, img: "https://example.com/steamdeck.jpg", desc: "Handheld PC gaming.", reviews: [] },
            { name: "Logitech G Cloud", price: 349.99, img: "https://example.com/logitechcloud.jpg", desc: "Cloud-first handheld.", reviews: [] },
            { name: "Razer Edge", price: 449.00, img: "https://example.com/razeredge.jpg", desc: "Performance Android gaming.", reviews: [] },
            { name: "Nintendo Switch Lite", price: 199.00, img: "https://example.com/switchlite.jpg", desc: "Affordable and portable.", reviews: [] },
            { name: "Retro Game Console Kit", price: 89.99, img: "https://example.com/retrogame.jpg", desc: "Pre-loaded classic titles.", reviews: [] }
        ],
      },
    homeappliances:{
        "refrigerators": [
            { name: "LG 260L Double Door", price: 349.99, img: "https://example.com/lgfridge.jpg", desc: "Smart inverter with frost-free tech.", reviews: [] },
            { name: "Samsung 253L Smart Convertible", price: 379.99, img: "https://example.com/samsungfridge.jpg", desc: "Convertible freezer-fridge combo.", reviews: [] },
            { name: "Whirlpool 300L 3 Star", price: 399.00, img: "https://example.com/whirlpoolfridge.jpg", desc: "Adaptive Intelligence cooling.", reviews: [] },
            { name: "Haier 258L Bottom Freezer", price: 359.00, img: "https://example.com/haierfridge.jpg", desc: "Easy access bottom freezer.", reviews: [] },
            { name: "Godrej 236L Inverter Fridge", price: 319.00, img: "https://example.com/godrejfridge.jpg", desc: "Toughened glass shelves.", reviews: [] },
            { name: "Panasonic 307L Econavi", price: 459.99, img: "https://example.com/panasonicfridge.jpg", desc: "Energy-efficient inverter.", reviews: [] },
            { name: "Bosch 347L Freezer Top", price: 489.99, img: "https://example.com/boschfridge.jpg", desc: "FreshSense for even cooling.", reviews: [] },
            { name: "Voltas Beko 220L", price: 299.99, img: "https://example.com/voltasfridge.jpg", desc: "Silent operation and eco mode.", reviews: [] },
            { name: "Blue Star 250L Fridge", price: 329.99, img: "https://example.com/bluestarfridge.jpg", desc: "Anti-bacterial gasket and LED lighting.", reviews: [] },
            { name: "Lloyd 280L Frost-Free", price: 345.00, img: "https://example.com/lloydfridge.jpg", desc: "Smart cooling system.", reviews: [] }
        ],
      
        "washingMachines": [
            { name: "IFB 6.5kg Front Load", price: 379.00, img: "https://example.com/ifbwm.jpg", desc: "Fully automatic with 3D wash.", reviews: [] },
            { name: "LG 7kg Top Load", price: 329.99, img: "https://example.com/lgwm.jpg", desc: "Turbo drum and smart inverter.", reviews: [] },
            { name: "Samsung 6.5kg Top Load", price: 309.00, img: "https://example.com/samsungwm.jpg", desc: "Diamond drum and eco tub.", reviews: [] },
            { name: "Whirlpool 7kg 5-Star", price: 349.99, img: "https://example.com/whirlpoolwm.jpg", desc: "Hard water wash and ZPF tech.", reviews: [] },
            { name: "Bosch 6kg Front Load", price: 399.00, img: "https://example.com/boschwm.jpg", desc: "Reload function and active water.", reviews: [] },
            { name: "Godrej 7.2kg Semi-Automatic", price: 199.99, img: "https://example.com/godrejwm.jpg", desc: "Economical and energy-saving.", reviews: [] },
            { name: "Haier 6kg Front Load", price: 289.00, img: "https://example.com/haierwm.jpg", desc: "Near zero pressure tech.", reviews: [] },
            { name: "Panasonic 6.5kg Top Load", price: 299.99, img: "https://example.com/panasonicwm.jpg", desc: "Aqua beat and 8-wash programs.", reviews: [] },
            { name: "Onida 6.2kg Washer", price: 189.00, img: "https://example.com/onidawm.jpg", desc: "Compact and powerful motor.", reviews: [] },
            { name: "Intex 6.2kg Semi Auto", price: 169.99, img: "https://example.com/intexwm.jpg", desc: "Durable with smart soak.", reviews: [] }
        ],
      
        "microwaveOvens": [
            { name: "IFB 20L Convection Oven", price: 149.99, img: "https://example.com/ifb20.jpg", desc: "Multi-stage cooking.", reviews: [] },
            { name: "Samsung 23L Solo Microwave", price: 119.99, img: "https://example.com/samsung23.jpg", desc: "Tact button control.", reviews: [] },
            { name: "LG 21L Grill Oven", price: 139.00, img: "https://example.com/lg21.jpg", desc: "Quartz heater for safety.", reviews: [] },
            { name: "Panasonic 27L Convection", price: 189.99, img: "https://example.com/pana27.jpg", desc: "Auto reheat and timer.", reviews: [] },
            { name: "Morphy Richards 23L", price: 169.00, img: "https://example.com/morphy23.jpg", desc: "Easy to clean cavity.", reviews: [] },
            { name: "Bajaj 20L Grill", price: 109.00, img: "https://example.com/bajaj20.jpg", desc: "Rotating glass turntable.", reviews: [] },
            { name: "Godrej 25L Convection", price: 179.99, img: "https://example.com/godrej25.jpg", desc: "Oil-free healthy cooking.", reviews: [] },
            { name: "Haier 20L Oven", price: 129.99, img: "https://example.com/haier20.jpg", desc: "Digital control panel.", reviews: [] },
            { name: "Voltas 23L Convection", price: 159.99, img: "https://example.com/voltas23.jpg", desc: "Grill and reheat.", reviews: [] },
            { name: "Prestige 19L OTG", price: 139.00, img: "https://example.com/prestige19.jpg", desc: "Compact and stylish.", reviews: [] }
        ],
      
        "airConditioners": [
            { name: "Daikin 1.5 Ton Inverter AC", price: 599.00, img: "https://example.com/daikin.jpg", desc: "Energy-efficient cooling.", reviews: [] },
            { name: "Voltas 1.4 Ton Split AC", price: 539.99, img: "https://example.com/voltas.jpg", desc: "High ambient cooling.", reviews: [] },
            { name: "Samsung 1.5 Ton 5-Star", price: 649.99, img: "https://example.com/samsungac.jpg", desc: "Convertible 5-in-1 mode.", reviews: [] },
            { name: "LG 1.5 Ton AI Dual Inverter", price: 699.99, img: "https://example.com/lgac.jpg", desc: "Smart diagnosis system.", reviews: [] },
            { name: "Hitachi 1.5 Ton iZen AC", price: 589.00, img: "https://example.com/hitachi.jpg", desc: "Auto climate tech.", reviews: [] },
            { name: "Blue Star 1 Ton Inverter", price: 509.99, img: "https://example.com/bluestar.jpg", desc: "Turbo cooling.", reviews: [] },
            { name: "Panasonic 1.5 Ton Smart AC", price: 669.00, img: "https://example.com/panasonicac.jpg", desc: "Wi-Fi and Alexa enabled.", reviews: [] },
            { name: "Godrej 1.5 Ton 3-Star", price: 479.00, img: "https://example.com/godrejac.jpg", desc: "Eco mode with low noise.", reviews: [] },
            { name: "Carrier 1.5 Ton Flexicool", price: 629.99, img: "https://example.com/carrier.jpg", desc: "Power saving operation.", reviews: [] },
            { name: "Whirlpool 1.5 Ton Magicool", price: 599.99, img: "https://example.com/whirlpoolac.jpg", desc: "6th sense fast cool tech.", reviews: [] }
        ],
        "electricKettles": [
            { name: "Prestige Electric Kettle 1.5L", price: 24.99, img: "https://example.com/prestigekettle.jpg", desc: "Auto shut-off with boil dry protection.", reviews: [] },
            { name: "Philips HD9306 Kettle", price: 29.99, img: "https://example.com/philipskettle.jpg", desc: "Stainless steel body, 1.5L.", reviews: [] },
            { name: "Bajaj Majesty KTX 15", price: 19.99, img: "https://example.com/bajajkettle.jpg", desc: "Cordless operation with indicator.", reviews: [] },
            { name: "Morphy Richards InstaCook", price: 39.99, img: "https://example.com/morphykettle.jpg", desc: "Multi-purpose electric kettle.", reviews: [] },
            { name: "Havells Aqua Plus", price: 32.50, img: "https://example.com/havellskettle.jpg", desc: "Cool touch outer body.", reviews: [] },
            { name: "Butterfly EKN 1.5L", price: 21.99, img: "https://example.com/butterflykettle.jpg", desc: "Ergonomic handle, energy efficient.", reviews: [] },
            { name: "Kent Elegant Kettle", price: 34.99, img: "https://example.com/kentkettle.jpg", desc: "Double-wall steel body.", reviews: [] },
            { name: "Pigeon Amaze Plus", price: 17.49, img: "https://example.com/pigeonkettle.jpg", desc: "Fast boil with 360-degree swivel base.", reviews: [] },
            { name: "Inalsa Electric Kettle", price: 26.00, img: "https://example.com/inalsakettle.jpg", desc: "1.8L capacity and dry-boil protection.", reviews: [] },
            { name: "V-Guard VKS17 Prime", price: 23.49, img: "https://example.com/vguardkettle.jpg", desc: "Anti-slip handle and easy pour.", reviews: [] }
        ],
      
        "mixerGrinders": [
            { name: "Sujata Dynamix Mixer Grinder", price: 79.99, img: "https://example.com/sujata.jpg", desc: "900W heavy-duty motor.", reviews: [] },
            { name: "Preethi Zodiac MG 218", price: 99.00, img: "https://example.com/preethi.jpg", desc: "5 jars and powerful motor.", reviews: [] },
            { name: "Butterfly Smart Mixer", price: 59.99, img: "https://example.com/butterflymixer.jpg", desc: "3 jars, shockproof body.", reviews: [] },
            { name: "Philips HL7756/00 Mixer", price: 69.99, img: "https://example.com/philipsmixer.jpg", desc: "750W with advanced ventilation.", reviews: [] },
            { name: "Bajaj Rex 500W Mixer", price: 49.99, img: "https://example.com/bajajmixer.jpg", desc: "Rust-proof body and vacuum feet.", reviews: [] },
            { name: "Prestige Iris Mixer Grinder", price: 64.99, img: "https://example.com/prestigemixer.jpg", desc: "3 stainless steel jars.", reviews: [] },
            { name: "Panasonic MX-AC400", price: 89.00, img: "https://example.com/panasonicmixer.jpg", desc: "Durable and efficient.", reviews: [] },
            { name: "Usha Smash Mixer", price: 55.00, img: "https://example.com/ushamixer.jpg", desc: "Compact and sturdy.", reviews: [] },
            { name: "Havells Maxx Grind Mixer", price: 62.99, img: "https://example.com/havellsmixer.jpg", desc: "Efficient cooling motor.", reviews: [] },
            { name: "Inalsa Jazz Mixer Grinder", price: 58.00, img: "https://example.com/inalsamixer.jpg", desc: "Three-speed setting.", reviews: [] }
        ],
      
        "vacuumCleaners": [
            { name: "Eureka Forbes Quick Clean DX", price: 74.99, img: "https://example.com/eurekavacuum.jpg", desc: "Powerful suction with blower.", reviews: [] },
            { name: "Dyson V8 Absolute", price: 349.99, img: "https://example.com/dysonv8.jpg", desc: "Cordless and powerful.", reviews: [] },
            { name: "Philips PowerPro FC9352", price: 129.99, img: "https://example.com/philipsvacuum.jpg", desc: "Compact bagless vacuum.", reviews: [] },
            { name: "Karcher WD 3 Multi-Purpose", price: 99.99, img: "https://example.com/karcher.jpg", desc: "Wet & dry vacuum.", reviews: [] },
            { name: "Inalsa Spruce Vacuum", price: 64.99, img: "https://example.com/insalavacuum.jpg", desc: "HEPA filter and blower.", reviews: [] },
            { name: "Mi Robot Vacuum Mop-P", price: 299.99, img: "https://example.com/mivacuum.jpg", desc: "Smart robot vacuum.", reviews: [] },
            { name: "AmazonBasics Vacuum Cleaner", price: 69.99, img: "https://example.com/amazonvacuum.jpg", desc: "Efficient with variable power.", reviews: [] },
            { name: "Agaro Regal Handheld", price: 49.00, img: "https://example.com/agarovacuum.jpg", desc: "Lightweight handheld.", reviews: [] },
            { name: "Black+Decker VM2825", price: 89.99, img: "https://example.com/blackdecker.jpg", desc: "Dual cyclone system.", reviews: [] },
            { name: "Bosch EasyVac 3", price: 109.00, img: "https://example.com/boschvacuum.jpg", desc: "Compact design.", reviews: [] }
        ],
      
        "waterPurifiers": [
            { name: "Kent Grand RO + UV + UF", price: 199.99, img: "https://example.com/kent.jpg", desc: "Multi-stage purification.", reviews: [] },
            { name: "Aquaguard Aura UV+UF", price: 159.99, img: "https://example.com/aquaguard.jpg", desc: "Copper ion technology.", reviews: [] },
            { name: "HUL Pureit Copper+ RO", price: 179.99, img: "https://example.com/pureit.jpg", desc: "7-stage filtration.", reviews: [] },
            { name: "Livpure Glo RO+UV", price: 149.99, img: "https://example.com/livpure.jpg", desc: "Taste enhancer.", reviews: [] },
            { name: "Blue Star Aristo RO+UV", price: 139.99, img: "https://example.com/bluestar.jpg", desc: "Aqua Taste Booster.", reviews: [] },
            { name: "AO Smith Z9 Hot+ Normal", price: 229.00, img: "https://example.com/aosmith.jpg", desc: "Hot & ambient water dispenser.", reviews: [] },
            { name: "Tata Swach Ultima Silver", price: 79.99, img: "https://example.com/tataswach.jpg", desc: "Gravity-based purifier.", reviews: [] },
            { name: "Faber Galaxy RO+UF+MAT", price: 139.00, img: "https://example.com/faber.jpg", desc: "Mineral enhancer tech.", reviews: [] },
            { name: "Havells Max RO+UV", price: 159.00, img: "https://example.com/havellspurifier.jpg", desc: "iProtect purification.", reviews: [] },
            { name: "Nasaka Tulip N1", price: 129.00, img: "https://example.com/nasaka.jpg", desc: "Compact and sleek.", reviews: [] }
        ],
      
        "roomHeaters": [
            { name: "Orpat OEH-1220 Fan Heater", price: 29.99, img: "https://example.com/orpat.jpg", desc: "Thermal cut-off safety.", reviews: [] },
            { name: "Havells OFR 11 Fin Heater", price: 129.99, img: "https://example.com/havellsheater.jpg", desc: "Oil-filled radiator.", reviews: [] },
            { name: "Bajaj Blow Hot Heater", price: 34.99, img: "https://example.com/bajajheater.jpg", desc: "Compact and durable.", reviews: [] },
            { name: "Usha Quartz Room Heater", price: 39.00, img: "https://example.com/ushaheater.jpg", desc: "Silent operation.", reviews: [] },
            { name: "Morphy Richards OFR Heater", price: 149.99, img: "https://example.com/morphyheater.jpg", desc: "Adjustable thermostat.", reviews: [] },
            { name: "Crompton Insta Comfort", price: 42.00, img: "https://example.com/cromptonheater.jpg", desc: "2 heat settings.", reviews: [] },
            { name: "V-Guard RH2QT Heater", price: 33.49, img: "https://example.com/vguardheater.jpg", desc: "Quartz tubes and reflectors.", reviews: [] },
            { name: "Orient Electric Areva Heater", price: 37.00, img: "https://example.com/orientheater.jpg", desc: "Cool touch body.", reviews: [] },
            { name: "Singer Heat Blow Room Heater", price: 30.99, img: "https://example.com/singerheater.jpg", desc: "Low noise motor.", reviews: [] },
            { name: "Inalsa Blaze Heater", price: 41.00, img: "https://example.com/insalaheater.jpg", desc: "High-speed fan.", reviews: [] }
        ],
      
        "fans": [
            { name: "Havells Festiva Ceiling Fan", price: 49.99, img: "https://example.com/havellsfan.jpg", desc: "Silent operation with high speed.", reviews: [] },
            { name: "Orient Electric Apex-FX", price: 44.00, img: "https://example.com/orientfan.jpg", desc: "Strong motor and wide sweep.", reviews: [] },
            { name: "Usha Mist Air Duos Fan", price: 39.99, img: "https://example.com/ushafan.jpg", desc: "High air delivery.", reviews: [] },
            { name: "Crompton Hill Briz", price: 37.00, img: "https://example.com/cromptonfan.jpg", desc: "Powerful airflow and durable.", reviews: [] },
            { name: "Bajaj Esteem Fan", price: 35.99, img: "https://example.com/bajajfan.jpg", desc: "Rust-proof aluminum body.", reviews: [] },
            { name: "Atomberg Renesa Fan", price: 59.99, img: "https://example.com/atomberg.jpg", desc: "BLDC motor energy saver.", reviews: [] },
            { name: "Panasonic Speed Ceiling Fan", price: 52.00, img: "https://example.com/panasonicfan.jpg", desc: "Decorative with elegant design.", reviews: [] },
            { name: "Polycab India Ceiling Fan", price: 42.99, img: "https://example.com/polycab.jpg", desc: "Double ball bearing motor.", reviews: [] },
            { name: "Anchor by Panasonic", price: 46.00, img: "https://example.com/anchorfan.jpg", desc: "Efficient motor and sleek look.", reviews: [] },
            { name: "V-Guard Zester Fan", price: 40.49, img: "https://example.com/vguardfan.jpg", desc: "Stylish with high torque motor.", reviews: [] }
        ],
      },
    "homeDecor": [
        { name: "Abstract Wall Art Canvas", price: 49.99, img: "https://example.com/abstract-wall-art.jpg", desc: "Modern abstract painting on canvas.", reviews: [] },
        { name: "Wooden Floating Wall Shelves", price: 29.99, img: "https://example.com/wall-shelves.jpg", desc: "Rustic wood wall-mounted shelves.", reviews: [] },
        { name: "Vintage Table Lamp", price: 34.50, img: "https://example.com/vintage-lamp.jpg", desc: "Antique brass table lamp with fabric shade.", reviews: [] },
        { name: "Ceramic Vase Set (3 pcs)", price: 24.99, img: "https://example.com/ceramic-vases.jpg", desc: "Handcrafted ceramic flower vases.", reviews: [] },
        { name: "Artificial Potted Plants", price: 19.99, img: "https://example.com/artificial-plants.jpg", desc: "Lifelike greenery for indoor decor.", reviews: [] },
        { name: "Bohemian Macrame Wall Hanging", price: 22.99, img: "https://example.com/macrame.jpg", desc: "Hand-knotted macrame art piece.", reviews: [] },
        { name: "Modern Area Rug (5x7 ft)", price: 89.99, img: "https://example.com/area-rug.jpg", desc: "Soft, geometric patterned rug.", reviews: [] },
        { name: "LED Strip Light Set", price: 14.99, img: "https://example.com/led-strip.jpg", desc: "Color-changing strip lights with remote.", reviews: [] },
        { name: "Wall Clock with Roman Numerals", price: 27.99, img: "https://example.com/wall-clock.jpg", desc: "Elegant black and gold timepiece.", reviews: [] },
        { name: "Decorative Candle Holders (Set of 2)", price: 18.50, img: "https://example.com/candle-holders.jpg", desc: "Metal and glass candle holders.", reviews: [] },
        { name: "Cushion Covers (Set of 4)", price: 15.99, img: "https://example.com/cushion-covers.jpg", desc: "Boho print cotton cushion cases.", reviews: [] },
        { name: "Photo Frame Set (6 pcs)", price: 32.00, img: "https://example.com/photo-frames.jpg", desc: "Assorted size photo frames.", reviews: [] },
        { name: "Woven Storage Baskets", price: 21.49, img: "https://example.com/storage-baskets.jpg", desc: "Multi-purpose hand-woven baskets.", reviews: [] },
        { name: "Tabletop Water Fountain", price: 54.99, img: "https://example.com/water-fountain.jpg", desc: "Zen-inspired indoor water feature.", reviews: [] },
        { name: "Wall Mirror with Wooden Frame", price: 44.99, img: "https://example.com/wall-mirror.jpg", desc: "Classic round mirror with natural frame.", reviews: [] },
        { name: "Hanging Lantern Lights", price: 37.50, img: "https://example.com/hanging-lanterns.jpg", desc: "Vintage style metal lantern lights.", reviews: [] },
        { name: "Decorative Buddha Idol", price: 25.00, img: "https://example.com/buddha-idol.jpg", desc: "Peaceful Buddha statue for home.", reviews: [] },
        { name: "Fragrance Diffuser with Oils", price: 28.00, img: "https://example.com/diffuser.jpg", desc: "Aromatherapy diffuser set.", reviews: [] },
        { name: "Handmade Dreamcatcher", price: 16.99, img: "https://example.com/dreamcatcher.jpg", desc: "Traditional dreamcatcher with feathers.", reviews: [] },
        { name: "Decorative Wall Plates (Set of 3)", price: 35.99, img: "https://example.com/wall-plates.jpg", desc: "Ceramic plates with ethnic design.", reviews: [] }
    ],
    "fitness": [
        { name: "Resistance Bands Set (5 pcs)", price: 19.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "For strength training and stretching.", reviews: [] },
        { name: "Foam Yoga Mat", price: 25.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Non-slip, extra thick.", reviews: [] },
        { name: "Digital Weighing Scale", price: 27.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Accurate, easy to read.", reviews: [] },
        { name: "Adjustable Dumbbell Set", price: 59.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Space-saving, versatile weights.", reviews: [] },
        { name: "Jump Rope (Speed Skipping)", price: 9.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Great for cardio workouts.", reviews: [] },
        { name: "Push-Up Bar Stand", price: 14.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Enhance your push-up routine.", reviews: [] },
        { name: "Kettlebell (10kg)", price: 34.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Perfect for strength training.", reviews: [] },
        { name: "Yoga Block (Set of 2)", price: 12.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Support for yoga poses.", reviews: [] },
        { name: "Foam Roller", price: 16.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Muscle recovery and massage.", reviews: [] },
        { name: "Pull-Up Bar", price: 22.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Doorway mounted, easy install.", reviews: [] },
        { name: "Medicine Ball (5kg)", price: 19.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "For core and strength workouts.", reviews: [] },
        { name: "Ankle Weights (Pair)", price: 14.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Add resistance to workouts.", reviews: [] },
        { name: "Gym Bag", price: 21.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Spacious and durable.", reviews: [] },
        { name: "Fitness Tracker Watch", price: 39.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Track steps, calories, and more.", reviews: [] },
        { name: "Adjustable Weight Bench", price: 49.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "For various strength exercises.", reviews: [] },
        { name: "Yoga Mat (6mm Thick)", price: 19.99, img: "https://example.com/yogamat.jpg", desc: "Non-slip surface, perfect for yoga and stretching.", reviews: [] },
        { name: "Adjustable Dumbbells (Pair)", price: 69.99, img: "https://example.com/dumbbells.jpg", desc: "Easy to adjust weights, compact design.", reviews: [] },
        { name: "Resistance Bands Set", price: 24.99, img: "https://example.com/resistancebands.jpg", desc: "Multiple resistance levels, full-body workouts.", reviews: [] },
        { name: "Treadmill (Foldable)", price: 399.00, img: "https://example.com/treadmill.jpg", desc: "Space-saving treadmill with LCD display.", reviews: [] },
        { name: "Exercise Ball (65cm)", price: 17.50, img: "https://example.com/exerciseball.jpg", desc: "Anti-burst stability ball for core workouts.", reviews: [] },
        { name: "Pull-Up Bar (Doorway) ", price: 34.99, img: "https://example.com/pullupbar.jpg", desc: "Sturdy steel bar for upper body strength.", reviews: [] },
        { name: "Jump Rope (Adjustable Length)", price: 12.99, img: "https://example.com/jumprope.jpg", desc: "Speed rope for cardio and endurance.", reviews: [] },
        { name: "Foam Roller (18-inch)", price: 15.99, img: "https://example.com/foamroller.jpg", desc: "Relieves muscle tightness and soreness.", reviews: [] },
        { name: "Fitness Tracker Band", price: 49.99, img: "https://example.com/fitband.jpg", desc: "Tracks steps, heart rate, and sleep.", reviews: [] },
        { name: "Kettlebell (10kg)", price: 29.99, img: "https://example.com/kettlebell.jpg", desc: "Powder-coated, versatile strength training.", reviews: [] }
    ],
    "tools": [
        { name: "Cordless Screwdriver Kit", price: 44.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Rechargeable, easy to use.", reviews: [] },
        { name: "Home Repair Toolkit (100 pcs)", price: 49.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "All-in-one toolkit for home.", reviews: [] },
        { name: "Heavy Duty Hammer", price: 15.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Durable and reliable.", reviews: [] },
        { name: "Adjustable Wrench Set", price: 18.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Multiple sizes for all needs.", reviews: [] },
        { name: "Electric Glue Gun", price: 12.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Quick heating, easy to use.", reviews: [] },
        { name: "Measuring Tape (25ft)", price: 7.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Accurate and sturdy.", reviews: [] },
        { name: "Utility Knife", price: 8.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Sharp, retractable blade.", reviews: [] },
        { name: "Pliers Set (3 pcs)", price: 13.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "For gripping and cutting.", reviews: [] },
        { name: "Cordless Drill Machine", price: 59.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Powerful and portable.", reviews: [] },
        { name: "Screwdriver Set (10 pcs)", price: 11.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "All sizes included.", reviews: [] },
        { name: "Spirit Level", price: 6.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "For perfect alignment.", reviews: [] },
        { name: "Wire Cutter & Stripper", price: 10.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "For electrical work.", reviews: [] },
        { name: "Adjustable Spanner", price: 9.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Versatile and sturdy.", reviews: [] },
        { name: "Mini Hacksaw", price: 7.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "For cutting metal and plastic.", reviews: [] },
        { name: "Tool Storage Box", price: 19.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", desc: "Organize your tools easily.", reviews: [] }
    ]
};

// Cart logic
let cart= [];

// Import category product arrays (for demonstration, use dynamic import if needed)
// Example: import { electronicsProducts } from './electronics.js';

// Add a mapping for category file imports
const categoryImports = {
  electronics: () => import('./electronics.js').then(m => m.electronicsProducts),
  home: () => import('./home_decor.js').then(m => m.homeDecorProducts),
  fitness: () => import('./fitness.js').then(m => m.fitnessProducts),
  tools: () => import('./tools.js').then(m => m.toolsProducts)
};

// Add a mapping for subcategories (example for men's tops)
const subcategoryMap = {
  mens: {
    'T-Shirts': ['Men\'s T-Shirt', 'Classic Cotton Polo Shirt', 'Pack of 3 Crew Neck T-Shirts'],
    'Shirts': ['Men\'s Shirt', 'Casual Button-Up Shirt'],
    'Sweatshirts & Hoodies': ['Men\'s Hoodie', 'Hooded Sweatshirt'],
    'Jackets': ['Men\'s Jacket', 'Leather Biker Jacket'],
    // ...add more as needed
  },
  // ...add for womens, kids, etc.
};

function renderProducts(category, elementId) {
    const container = document.getElementById(elementId);
    // Flatten all subcategory arrays into one array
    const allProducts = Object.values(products[category] || {}).flat();
    container.innerHTML = allProducts.map((product, idx) => `
        <div class="product-card" data-category="${category}" data-idx="${idx}">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <div class="price">₹${product.price.toFixed(2)}</div>
            <button class="add-to-cart" data-category="${category}" data-idx="${idx}">Add to Cart</button>
        </div>
    `).join('');
}

function renderHomeProducts() {
    const container = document.getElementById('home-products');
    let all = [];
    Object.keys(products).forEach(category => {
        all = all.concat(Object.values(products[category] || {}).flat().map((product, idx) => ({ ...product, category, idx })));
    });
    container.innerHTML = all.map(product => `
        <div class="product-card" data-category="${product.category}" data-idx="${product.idx}">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <div class="price">₹${product.price.toFixed(2)}</div>
            <button class="add-to-cart" data-category="${product.category}" data-idx="${product.idx}">Add to Cart</button>
        </div>
    `).join('');
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('cart-total').textContent = '0.00';
        return;
    }
    cartItems.innerHTML = cart.map((item, i) => `
        <div class="cart-item">
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-details">
                <strong>${item.name}</strong><br>
                ₹${item.price.toFixed(2)} x ${item.qty}
            </div>
            <span class="cart-item-remove" data-idx="${i}">&times;</span>
        </div>
    `).join('');
    document.getElementById('cart-total').textContent = cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);
}

function showSection(category) {
    document.querySelectorAll('.product-section').forEach(sec => sec.classList.remove('active'));
    const section = document.getElementById(`${category}`);
    if (section) section.classList.add('active');
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.filter-btn[data-category="${category}"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

function renderProductDetail(product) {
    const detail = document.getElementById('product-detail');
    detail.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <div class="price">₹${product.price.toFixed(2)}</div>
        <div class="desc">${product.desc}</div>
        <button class="add-to-cart" data-category="${product.category}" data-idx="${product.idx}">Add to Cart</button>
        <div class="reviews">
            <h4>Customer Reviews</h4>
            ${product.reviews && product.reviews.length > 0 ? product.reviews.map(r => `
                <div class="review">
                    <strong>${r.user}</strong> <span>(${r.rating}★)</span><br>
                    <span>${r.text}</span>
                </div>
            `).join('') : '<span>No reviews yet.</span>'}
        </div>
    `;
}

async function renderCategoryProducts(category) {
  if (categoryImports[category]) {
    const productsArr = await categoryImports[category]();
    const container = document.getElementById(`${category}-products`);
    if (container) {
      container.innerHTML = productsArr.map((product, idx) => `
        <div class="product-card" data-category="${category}" data-idx="${idx}">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <div class="price">₹${product.price.toFixed(2)}</div>
            <button class="add-to-cart" data-category="${category}" data-idx="${idx}">Add to Cart</button>
        </div>
      `).join('');
    }
  }
}

function renderSubcategoryProducts(mainCategory, subcategory) {
    const container = document.getElementById(`${mainCategory}-products`);
    if (container && products[mainCategory] && products[mainCategory][subcategory]) {
        const filtered = products[mainCategory][subcategory];
        container.innerHTML = filtered.map((product, idx) => `
            <div class="product-card" data-category="${mainCategory}" data-idx="${idx}">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
                <div class="price">₹${product.price.toFixed(2)}</div>
                <button class="add-to-cart" data-category="${mainCategory}" data-idx="${idx}">Add to Cart</button>
            </div>
        `).join('');
        showSection(mainCategory);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts('mens', 'mens-products');
    renderProducts('womens', 'womens-products');
    renderProducts('kids', 'kids-products');
    renderProducts('accessories', 'accessories-products');
    renderProducts('footwear', 'footwear-products');
    renderProducts('skincare', 'skincare-products');
    renderHomeProducts();
    showSection('home');
    updateCartCount();

    // Sidebar subcategory click
    document.querySelectorAll('.subcat-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            // Remove highlight from all subcat-btn and filter-btn
            document.querySelectorAll('.subcat-btn, .filter-btn').forEach(b => b.classList.remove('active'));
            // Highlight only the clicked subcat-btn
            btn.classList.add('active');
            const mainCat = btn.getAttribute('data-main');
            const subcat = btn.getAttribute('data-sub');
            renderSubcategoryProducts(mainCat, subcat);
            showSection(mainCat);
        });
    });

    // Sidebar category click
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', async e => {
          e.preventDefault();
          document.querySelectorAll('.subcat-btn, .filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const cat = btn.getAttribute('data-category');
          if (cat === 'home') {
              showSection('home');
              renderHomeProducts();
          } else if (categoryImports[cat]) {
              await renderCategoryProducts(cat);
              showSection(cat);
          } else {
              renderProducts(cat, `${cat}-products`);
              showSection(cat);
          }
      });
  });

    // Add to cart
    document.body.addEventListener('click', e => {
        if (e.target.classList.contains('add-to-cart')) {
            const cat = e.target.getAttribute('data-category');
            const idx = +e.target.getAttribute('data-idx');
            const prod = { ...products[cat][idx], category: cat, idx };
            const existing = cart.find(item => item.name === prod.name);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ ...prod, qty: 1 });
            }
            updateCartCount();
        }
        // Remove from cart
        if (e.target.classList.contains('cart-item-remove')) {
            const idx = +e.target.getAttribute('data-idx');
            cart.splice(idx, 1);
            renderCart();
            updateCartCount();
        }
    });

    // Product detail modal
    document.body.addEventListener('click', e => {
        const card = e.target.closest('.product-card');
        if (card && !e.target.classList.contains('add-to-cart')) {
            const cat = card.getAttribute('data-category');
            const idx = +card.getAttribute('data-idx');
            const prod = { ...products[cat][idx], category: cat, idx };
            renderProductDetail(prod);
            document.getElementById('product-modal').classList.remove('hidden');
        }
    });
    document.getElementById('close-product').addEventListener('click', () => {
        document.getElementById('product-modal').classList.add('hidden');
    });

    // Cart modal
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');
    cartBtn.addEventListener('click', () => {
        renderCart();
        cartModal.classList.remove('hidden');
    });
    closeCart.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });
    // Checkout modal
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckout = document.getElementById('close-checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            cartModal.classList.add('hidden');
            checkoutModal.classList.remove('hidden');
        });
    }
    closeCheckout.addEventListener('click', () => {
        checkoutModal.classList.add('hidden');
    });
    // Checkout form
    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', e => {
        e.preventDefault();
        // Simulate payment
        document.getElementById('payment-success').classList.remove('hidden');
        setTimeout(() => {
            checkoutModal.classList.add('hidden');
            document.getElementById('payment-success').classList.add('hidden');
            cart= [];
            updateCartCount();
            renderCart();
        }, 2000);
    });

    // Search functionality
    document.getElementById('search-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const query = document.getElementById('search-input').value.trim().toLowerCase();
        if (!query) return;
        // Import all product arrays
        Promise.all([
            import('./mens.js'),
            import('./womens.js'),
            import('./kids.js'),
            import('./accessories.js'),
            import('./footwear.js'),
            import('./skincare.js'),
            import('./electronics.js'),
            import('./fitness.js'),
            import('./tools.js')
        ]).then(([mens, womens, kids, accessories, footwear, skincare, electronics, fitness, tools]) => {
            const allProducts= [
                ...(mens.mensProducts || []),
                ...(womens.womensProducts || []),
                ...(kids.kidsProducts || []),
                ...(accessories.accessoriesProducts || []),
                ...(footwear.footwearProducts || []),
                ...(skincare.skincareProducts || []),
                ...(electronics.electronicsProducts || []),
                ...(fitness.fitnessProducts || []),
                ...(tools.toolsProducts || [])
            ];
            const results = allProducts.filter(p =>
                p.name.toLowerCase().includes(query) ||
                (p.desc && p.desc.toLowerCase().includes(query))
            );
            // Display results in the home section
            const homeSection = document.getElementById('home');
            const homeList = document.getElementById('home-products');
            document.querySelectorAll('.product-section').forEach(sec => sec.style.display = 'none');
            homeSection.style.display = 'block';
            homeList.innerHTML = results.length ? results.map(product => `
                <div class="product-card">
                    <img src="${product.img}" alt="${product.name}">
                    <h3>${highlightMatch(product.name, query)}</h3>
                    <p class="desc">${highlightMatch(product.desc, query)}</p>
                    <div class="price">₹${product.price}</div>
                    <button class="add-to-cart" data-name="${product.name}">Add to Cart</button>
                </div>
            `).join('') : '<p>No products found.</p>';
        });
    });

    // Add more dummy products to each category to ensure at least 15 per category
    ['mens', 'womens', 'kids', 'accessories', 'footwear', 'skincare', 'electronics', 'fitness', 'tools'].forEach(cat => {
        if (products[cat]) {
            let count = products[cat].length;
            for (let i = count; i < 15; i++) {
                products[cat].push({
                    name: `${cat.charAt(0).toUpperCase() + cat.slice(1)} Product ${i+1}`,
                    price: 10 + i,
                    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
                    desc: `Sample description for ${cat} product ${i+1}.`,
                    reviews: []
                });
            }
        }
    });
});

function highlightMatch(text, query) {
    if (!text) return '';
    const re = new RegExp(`(${query})`, 'gi');
    return text.replace(re, '<mark>$1</mark>');
} 