const products = {
    mens: {
        "tshirts": [
            { name: "Crew Neck T-Shirt", price: 22.99, img: "https://source.unsplash.com/400x400/?mens-tshirt", desc: "Crew Neck T-Shirt - High quality and style.", reviews: [] },
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
                {
                  name: "Classic Straight Formal Pants",
                  price: 42.99,
                  img: "https://source.unsplash.com/400x400/?women-formal-pants",
                  desc: "Timeless straight-leg pants for work and meetings.",
                  reviews: []
                },
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
                { name: "Halter Neck Sundress", price: 29.99, img: "https://source.unsplash.com/400x400/?halter-sundress", desc: "Perfect for beach days.", reviews: [] },
                { name: "Sleeveless Cotton Midi", price: 31.50, img: "https://source.unsplash.com/400x400/?sleeveless-dress", desc: "Effortlessly cool and breathable.", reviews: [] },
                { name: "Strappy Ruffle Hem Dress", price: 34.00, img: "https://source.unsplash.com/400x400/?summer-ruffle-dress", desc: "Feminine and flirty.", reviews: [] },
                { name: "Wrap Front Printed Dress", price: 33.25, img: "https://source.unsplash.com/400x400/?wrap-summer-dress", desc: "Stylish wrap detail with fun print.", reviews: [] },
                { name: "Off-Shoulder Mini Dress", price: 36.99, img: "https://source.unsplash.com/400x400/?offshoulder-summer", desc: "Summer chic in one piece.", reviews: [] },
                { name: "Tiered Swing Dress", price: 30.00, img: "https://source.unsplash.com/400x400/?tiered-summer-dress", desc: "Loose and flowy with movement.", reviews: [] },
                { name: "Boho Embroidered Dress", price: 35.75, img: "https://source.unsplash.com/400x400/?boho-summer-dress", desc: "Ethnic charm with breathable fabric.", reviews: [] },
                { name: "Tie-Strap Midi Dress", price: 33.00, img: "https://source.unsplash.com/400x400/?strap-midi-dress", desc: "Custom fit with tie-up shoulders.", reviews: [] },
                { name: "Back Tie Maxi Dress", price: 38.50, img: "https://source.unsplash.com/400x400/?backtie-dress", desc: "Statement back and comfy cut.", reviews: [] },
                { name: "Smocked Bodice Dress", price: 29.99, img: "https://source.unsplash.com/400x400/?smocked-dress", desc: "Stretchy and flattering fit.", reviews: [] },
                { name: "Camisole Slip Dress", price: 31.75, img: "https://source.unsplash.com/400x400/?camisole-dress", desc: "Minimal summer slip for layering.", reviews: [] },
                { name: "Polka Dot Summer Dress", price: 30.50, img: "https://source.unsplash.com/400x400/?polka-dress", desc: "Retro charm and lightweight design.", reviews: [] },
                { name: "Printed Kaftan Dress", price: 34.49, img: "https://source.unsplash.com/400x400/?kaftan-dress", desc: "Relaxed vacation vibe.", reviews: [] },
                { name: "Flare Hem Strappy Dress", price: 33.99, img: "https://source.unsplash.com/400x400/?flare-dress", desc: "Perfect twirl-friendly silhouette.", reviews: [] }
            ],
            "FormalDresses": [
                { name: "Pencil Sheath Dress", price: 45.99, img: "https://source.unsplash.com/400x400/?sheath-dress", desc: "Tailored fit ideal for office or meetings.", reviews: [] },
                { name: "Collared Midi Dress", price: 47.50, img: "https://source.unsplash.com/400x400/?collared-dress", desc: "Professional and elegant.", reviews: [] },
                { name: "Structured Peplum Dress", price: 49.99, img: "https://source.unsplash.com/400x400/?peplum-dress", desc: "Accentuates the waist with style.", reviews: [] },
                { name: "Boat Neck Office Dress", price: 44.00, img: "https://source.unsplash.com/400x400/?boatneck-dress", desc: "Minimal and classy.", reviews: [] },
                { name: "Tweed Shift Dress", price: 52.99, img: "https://source.unsplash.com/400x400/?tweed-dress", desc: "Textured tweed with a power look.", reviews: [] },
                { name: "Wrap Belted Work Dress", price: 48.50, img: "https://source.unsplash.com/400x400/?belted-work-dress", desc: "Flattering waist tie for formal charm.", reviews: [] },
                { name: "Double-Breasted Blazer Dress", price: 54.25, img: "https://source.unsplash.com/400x400/?blazer-dress", desc: "Blazer style with formal edge.", reviews: [] },
                { name: "Color Block Professional Dress", price: 47.75, img: "https://source.unsplash.com/400x400/?colorblock-dress", desc: "Subtle color splits for structure.", reviews: [] },
                { name: "Cap Sleeve Formal Dress", price: 43.99, img: "https://source.unsplash.com/400x400/?cap-sleeve-dress", desc: "Simplicity meets polish.", reviews: [] },
                { name: "Asymmetric Hem Midi Dress", price: 46.49, img: "https://source.unsplash.com/400x400/?asymmetric-dress", desc: "Modern hem for bold professionals.", reviews: [] },
                { name: "Notch Neckline Dress", price: 45.00, img: "https://source.unsplash.com/400x400/?notch-neck-dress", desc: "Simple, sleek with a signature notch.", reviews: [] },
                { name: "Three-Quarter Sleeve Dress", price: 48.00, img: "https://source.unsplash.com/400x400/?3-4-sleeve-dress", desc: "Smart and timeless for the office.", reviews: [] },
                { name: "High Neck Workwear Dress", price: 46.25, img: "https://source.unsplash.com/400x400/?highneck-formal", desc: "Professional with a modest neckline.", reviews: [] },
                { name: "Monochrome Fit & Flare Dress", price: 49.50, img: "https://source.unsplash.com/400x400/?monochrome-dress", desc: "Office elegance with feminine cut.", reviews: [] },
                { name: "Structured Belted Dress", price: 50.99, img: "https://source.unsplash.com/400x400/?structured-dress", desc: "Tight waist and smooth silhouette.", reviews: [] }
            ],
            "WinterDresses": [
                { name: "Knitted Turtleneck Midi Dress", price: 54.99, img: "https://source.unsplash.com/400x400/?knit-midi-dress", desc: "Cozy winter knit in midi length.", reviews: [] },
                { name: "Sweater Dress with Belt", price: 49.99, img: "https://source.unsplash.com/400x400/?sweater-dress", desc: "Waist-belted soft sweater dress.", reviews: [] },
                { name: "Velvet Evening Dress", price: 69.99, img: "https://source.unsplash.com/400x400/?velvet-dress", desc: "Elegant plush velvet.", reviews: [] },
                { name: "Long Sleeve Bodycon Dress", price: 45.00, img: "https://source.unsplash.com/400x400/?long-bodycon-dress", desc: "Form-fitting with sleeves.", reviews: [] },
                { name: "Plaid Flannel Shirt Dress", price: 43.50, img: "https://source.unsplash.com/400x400/?plaid-dress", desc: "Warm and casual winter choice.", reviews: [] },
                { name: "Wool Wrap Dress", price: 58.00, img: "https://source.unsplash.com/400x400/?wool-wrap-dress", desc: "Wrap style in wool blend.", reviews: [] },
                { name: "Cable Knit Maxi Dress", price: 65.99, img: "https://source.unsplash.com/400x400/?cable-knit-dress", desc: "Maxi length, thick knit.", reviews: [] },
                { name: "Turtleneck Sweater Dress", price: 52.99, img: "https://source.unsplash.com/400x400/?turtleneck-sweater-dress", desc: "Oversized turtleneck design.", reviews: [] },
                { name: "Holiday Sequin Dress", price: 74.99, img: "https://source.unsplash.com/400x400/?holiday-dress", desc: "Festive sequin detailing.", reviews: [] },
                { name: "Fleece Lined Midi Dress", price: 59.25, img: "https://source.unsplash.com/400x400/?fleece-dress", desc: "Ultimate warmth and style.", reviews: [] }
            ],
            "Jackets": [
                { name: "Denim Trucker Jacket", price: 45.99, img: "https://source.unsplash.com/400x400/?denim-jacket", desc: "Classic fit with a vintage wash.", reviews: [] },
                { name: "Faux Leather Moto Jacket", price: 59.50, img: "https://source.unsplash.com/400x400/?leather-jacket", desc: "Edgy and stylish biker jacket.", reviews: [] },
                { name: "Puffer Jacket", price: 62.99, img: "https://source.unsplash.com/400x400/?puffer-jacket", desc: "Warmth without bulk.", reviews: [] },
                { name: "Bomber Jacket", price: 54.00, img: "https://source.unsplash.com/400x400/?bomber-jacket", desc: "Trendy street style.", reviews: [] },
                { name: "Corduroy Short Jacket", price: 49.99, img: "https://source.unsplash.com/400x400/?corduroy-jacket", desc: "Textured and soft.", reviews: [] },
                { name: "Utility Cargo Jacket", price: 58.25, img: "https://source.unsplash.com/400x400/?cargo-jacket", desc: "Practical yet stylish.", reviews: [] },
                { name: "Tweed Jacket", price: 66.99, img: "https://source.unsplash.com/400x400/?tweed-jacket", desc: "Elegant Parisian flair.", reviews: [] },
                { name: "Teddy Sherpa Jacket", price: 60.00, img: "https://source.unsplash.com/400x400/?sherpa-jacket", desc: "Ultra-soft and cozy.", reviews: [] },
                { name: "Windbreaker Jacket", price: 44.75, img: "https://source.unsplash.com/400x400/?windbreaker", desc: "Lightweight and functional.", reviews: [] },
                { name: "Oversized Denim Jacket", price: 52.49, img: "https://source.unsplash.com/400x400/?oversized-denim", desc: "Baggy and bold.", reviews: [] }
            ],
              
            "Sweaters": [
                { name: "Crew Neck Wool Sweater", price: 39.99, img: "https://source.unsplash.com/400x400/?wool-sweater", desc: "Warm, cozy winter essential.", reviews: [] },
                { name: "Oversized Knit Sweater", price: 41.50, img: "https://source.unsplash.com/400x400/?knit-sweater", desc: "Chunky knit comfort.", reviews: [] },
                { name: "Cable Knit Pullover", price: 42.99, img: "https://source.unsplash.com/400x400/?cable-knit", desc: "Classic cable details.", reviews: [] },
                { name: "Turtleneck Ribbed Sweater", price: 44.00, img: "https://source.unsplash.com/400x400/?turtleneck", desc: "Elegant neck coverage.", reviews: [] },
                { name: "Colorblock Sweater", price: 38.99, img: "https://source.unsplash.com/400x400/?colorblock-sweater", desc: "Trendy contrasting shades.", reviews: [] },
                { name: "Buttoned Cardigan", price: 36.25, img: "https://source.unsplash.com/400x400/?button-cardigan", desc: "Light layering cardigan.", reviews: [] },
                { name: "V-Neck Fine Knit", price: 37.75, img: "https://source.unsplash.com/400x400/?fine-knit", desc: "Simple and breathable.", reviews: [] },
                { name: "Wrap Style Sweater", price: 40.99, img: "https://source.unsplash.com/400x400/?wrap-sweater", desc: "Tie-up front design.", reviews: [] },
                { name: "Embroidered Pullover", price: 39.00, img: "https://source.unsplash.com/400x400/?embroidered-sweater", desc: "Delicate detailing.", reviews: [] },
                { name: "Striped Knitwear", price: 36.99, img: "https://source.unsplash.com/400x400/?striped-knit", desc: "Colorful and casual.", reviews: [] }
            ],
              
            "Coats": [
                { name: "Longline Trench Coat", price: 75.99, img: "https://source.unsplash.com/400x400/?trench-coat", desc: "Timeless belted silhouette.", reviews: [] },
                { name: "Wool Blend Overcoat", price: 82.50, img: "https://source.unsplash.com/400x400/?wool-coat", desc: "Elegant winter layer.", reviews: [] },
                { name: "Faux Fur Collar Coat", price: 78.25, img: "https://source.unsplash.com/400x400/?fur-coat", desc: "Soft touch and glam vibe.", reviews: [] },
                { name: "Checked Wool Coat", price: 85.99, img: "https://source.unsplash.com/400x400/?checked-coat", desc: "Retro check pattern.", reviews: [] },
                { name: "Belted Peacoat", price: 73.99, img: "https://source.unsplash.com/400x400/?peacoat", desc: "Structured and smart.", reviews: [] },
                { name: "Hooded Duffle Coat", price: 76.00, img: "https://source.unsplash.com/400x400/?duffle-coat", desc: "Buttons and hooded warmth.", reviews: [] },
                { name: "Teddy Maxi Coat", price: 79.50, img: "https://source.unsplash.com/400x400/?teddy-coat", desc: "Fluffy and trendy.", reviews: [] },
                { name: "Wrap Wool Coat", price: 81.25, img: "https://source.unsplash.com/400x400/?wrap-coat", desc: "Wrap design with sash.", reviews: [] },
                { name: "Single Breasted Coat", price: 77.75, img: "https://source.unsplash.com/400x400/?singlebreast-coat", desc: "Simple and sleek.", reviews: [] },
                { name: "Faux Shearling Lined Coat", price: 84.99, img: "https://source.unsplash.com/400x400/?shearling-coat", desc: "Warmest winter option.", reviews: [] }
            ],
              
            "Blazers": [
                { name: "Single Button Blazer", price: 58.99, img: "https://source.unsplash.com/400x400/?women-blazer", desc: "Slim fit for office or smart events.", reviews: [] },
                { name: "Double Breasted Blazer", price: 62.50, img: "https://source.unsplash.com/400x400/?double-breasted-blazer", desc: "Formal and powerful.", reviews: [] },
                { name: "Oversized Blazer", price: 59.99, img: "https://source.unsplash.com/400x400/?oversized-blazer", desc: "Relaxed and fashion-forward.", reviews: [] },
                { name: "Plaid Print Blazer", price: 60.25, img: "https://source.unsplash.com/400x400/?plaid-blazer", desc: "Retro-inspired formal.", reviews: [] },
                { name: "Belted Blazer", price: 63.49, img: "https://source.unsplash.com/400x400/?belted-blazer", desc: "Accentuates the waist.", reviews: [] },
                { name: "Blazer Dress Hybrid", price: 66.00, img: "https://source.unsplash.com/400x400/?blazer-dress", desc: "Multi-purpose sophistication.", reviews: [] },
                { name: "Tweed Cropped Blazer", price: 61.99, img: "https://source.unsplash.com/400x400/?cropped-blazer", desc: "Short and chic.", reviews: [] },
                { name: "Collarless Office Blazer", price: 57.75, img: "https://source.unsplash.com/400x400/?collarless-blazer", desc: "Minimalist look.", reviews: [] },
                { name: "Printed Party Blazer", price: 64.25, img: "https://source.unsplash.com/400x400/?party-blazer", desc: "Make a bold statement.", reviews: [] },
                { name: "Longline Formal Blazer", price: 65.99, img: "https://source.unsplash.com/400x400/?long-blazer", desc: "Extended length for boss vibes.", reviews: [] }
            ],
            
            "Kurtis": [
                {
                  id: 1,
                  name: "Floral Printed Cotton Kurti",
                  category: "Kurti",
                  price: 22.99,
                  image: "images/kurtis/floral_printed.jpg",
                  description: "Soft cotton kurti with floral patterns and round neck."
                },
                {
                  id: 2,
                  name: "Straight Fit Rayon Kurti",
                  category: "Kurti",
                  price: 28.50,
                  image: "images/kurtis/straight_rayon.jpg",
                  description: "Elegant rayon kurti with three-quarter sleeves, ideal for daily wear."
                },
                {
                  id: 3,
                  name: "Anarkali Style Kurti",
                  category: "Kurti",
                  price: 34.00,
                  image: "images/kurtis/anarkali_style.jpg",
                  description: "Flowy Anarkali-style kurti with embroidered yoke."
                },
                {
                  id: 4,
                  name: "A-Line Kurti with Block Prints",
                  category: "Kurti",
                  price: 26.75,
                  image: "images/kurtis/a_line_block.jpg",
                  description: "A-line kurti with block print design and mandarin collar."
                },
                {
                  id: 5,
                  name: "High-Low Hem Kurti",
                  category: "Kurti",
                  price: 29.99,
                  image: "images/kurtis/high_low.jpg",
                  description: "Chic high-low hem kurti in pastel shades, perfect for brunch."
                },
                {
                  id: 6,
                  name: "Pathani Style Kurti",
                  category: "Kurti",
                  price: 31.50,
                  image: "images/kurtis/pathani.jpg",
                  description: "Pathani kurti with roll-up sleeves and front buttons."
                },
                {
                  id: 7,
                  name: "Georgette Layered Kurti",
                  category: "Kurti",
                  price: 37.00,
                  image: "images/kurtis/georgette_layered.jpg",
                  description: "Party-wear georgette kurti with layers and sequin work."
                },
                {
                  id: 8,
                  name: "Denim Style Casual Kurti",
                  category: "Kurti",
                  price: 24.99,
                  image: "images/kurtis/denim.jpg",
                  description: "Trendy denim-look kurti with front pocket and full sleeves."
                },
                {
                  id: 9,
                  name: "Chikankari Embroidered Kurti",
                  category: "Kurti",
                  price: 39.99,
                  image: "images/kurtis/chikankari.jpg",
                  description: "Elegant hand-embroidered chikankari kurti in pastel tones."
                },
                {
                  id: 10,
                  name: "Cotton Slit Kurti",
                  category: "Kurti",
                  price: 23.50,
                  image: "images/kurtis/slit_cotton.jpg",
                  description: "Casual slit kurti with minimalist design and soft cotton fabric."
                },
                {
                  id: 11,
                  name: "Kaftan Style Kurti",
                  category: "Kurti",
                  price: 35.00,
                  image: "images/kurtis/kaftan.jpg",
                  description: "Comfortable kaftan kurti with tie-dye design and drawstring waist."
                },
                {
                  id: 12,
                  name: "Bandhani Print Kurti",
                  category: "Kurti",
                  price: 27.49,
                  image: "images/kurtis/bandhani.jpg",
                  description: "Traditional Bandhani printed kurti with vibrant color palette."
                },
                {
                  id: 13,
                  name: "Sleeveless Festive Kurti",
                  category: "Kurti",
                  price: 30.99,
                  image: "images/kurtis/sleeveless_festive.jpg",
                  description: "Stylish sleeveless kurti with zari embroidery for festive occasions."
                },
                {
                  id: 14,
                  name: "Mirror Work Designer Kurti",
                  category: "Kurti",
                  price: 42.00,
                  image: "images/kurtis/mirror_work.jpg",
                  description: "Premium designer kurti with intricate mirror work and bell sleeves."
                },
                {
                  id: 15,
                  name: "Striped Cotton Kurti",
                  category: "Kurti",
                  price: 21.95,
                  image: "images/kurtis/striped.jpg",
                  description: "Light striped kurti suitable for work or casual wear."
                }
            ],
            "Anarkali": [
                {
                  id: 101,
                  name: "Embroidered Anarkali Gown",
                  category: "Anarkali",
                  price: 59.99,
                  image: "images/anarkali/embroidered_gown.jpg",
                  description: "Floor-length Anarkali gown with intricate embroidery and full sleeves."
                },
                {
                  id: 102,
                  name: "Silk Festive Anarkali",
                  category: "Anarkali",
                  price: 72.50,
                  image: "images/anarkali/silk_festive.jpg",
                  description: "Rich silk Anarkali with zari border and matching dupatta."
                },
                {
                  id: 103,
                  name: "Printed Cotton Anarkali",
                  category: "Anarkali",
                  price: 38.25,
                  image: "images/anarkali/printed_cotton.jpg",
                  description: "Lightweight cotton Anarkali with all-over floral prints."
                },
                {
                  id: 104,
                  name: "Pastel Layered Anarkali",
                  category: "Anarkali",
                  price: 65.00,
                  image: "images/anarkali/pastel_layered.jpg",
                  description: "Pastel-shaded layered Anarkali with net overlay and embroidery."
                },
                {
                  id: 105,
                  name: "Georgette Sequin Anarkali",
                  category: "Anarkali",
                  price: 80.00,
                  image: "images/anarkali/sequin_georgette.jpg",
                  description: "Georgette Anarkali with sequin detailing, ideal for party wear."
                },
                {
                  id: 106,
                  name: "Front Slit Designer Anarkali",
                  category: "Anarkali",
                  price: 69.99,
                  image: "images/anarkali/front_slit.jpg",
                  description: "Stylish front-slit Anarkali with embellished neckline and sleeves."
                },
                {
                  id: 107,
                  name: "Velvet Winter Anarkali",
                  category: "Anarkali",
                  price: 84.00,
                  image: "images/anarkali/velvet.jpg",
                  description: "Warm velvet Anarkali with embroidered patterns for winter events."
                },
                {
                  id: 108,
                  name: "Bandhani Printed Anarkali",
                  category: "Anarkali",
                  price: 42.75,
                  image: "images/anarkali/bandhani.jpg",
                  description: "Traditional Bandhani print with contrast dupatta."
                },
                {
                  id: 109,
                  name: "Simple Everyday Anarkali",
                  category: "Anarkali",
                  price: 33.50,
                  image: "images/anarkali/simple_everyday.jpg",
                  description: "Minimalist Anarkali for daily wear with front buttons."
                },
                {
                  id: 110,
                  name: "Pakistani Style Anarkali",
                  category: "Anarkali",
                  price: 77.00,
                  image: "images/anarkali/pakistani_style.jpg",
                  description: "Elegant Pakistani Anarkali with long kurta and dupatta."
                },
                {
                  id: 111,
                  name: "Anarkali with Mirror Work",
                  category: "Anarkali",
                  price: 68.90,
                  image: "images/anarkali/mirror_work.jpg",
                  description: "Festive Anarkali with fine mirror work and soft fabric."
                },
                {
                  id: 112,
                  name: "Ombre Dyed Anarkali Dress",
                  category: "Anarkali",
                  price: 56.20,
                  image: "images/anarkali/ombre_dyed.jpg",
                  description: "Trendy ombre dyed Anarkali with tassels and tie-up detail."
                },
                {
                  id: 113,
                  name: "Cape Style Anarkali",
                  category: "Anarkali",
                  price: 73.50,
                  image: "images/anarkali/cape_style.jpg",
                  description: "Unique Anarkali with attached cape sleeves and belt."
                },
                {
                  id: 114,
                  name: "Ethnic Red Anarkali",
                  category: "Anarkali",
                  price: 48.99,
                  image: "images/anarkali/ethnic_red.jpg",
                  description: "Traditional red Anarkali with golden thread work."
                },
                {
                  id: 115,
                  name: "Chanderi Silk Anarkali",
                  category: "Anarkali",
                  price: 60.00,
                  image: "images/anarkali/chanderi_silk.jpg",
                  description: "Chanderi silk Anarkali with fine print and flared bottom."
                },
                {
                  id: 116,
                  name: "Floor Length Flared Anarkali",
                  category: "Anarkali",
                  price: 79.95,
                  image: "images/anarkali/floor_flared.jpg",
                  description: "Highly flared floor-length Anarkali gown for weddings and receptions."
                },
                {
                  id: 117,
                  name: "Anarkali with Jacket",
                  category: "Anarkali",
                  price: 74.99,
                  image: "images/anarkali/jacket_anarkali.jpg",
                  description: "Anarkali set with embroidered ethnic jacket and pastel tone inner."
                },
                {
                  id: 118,
                  name: "Net Embroidered Anarkali",
                  category: "Anarkali",
                  price: 85.00,
                  image: "images/anarkali/net_embroidery.jpg",
                  description: "Elegant Anarkali with embroidered net layer and satin lining."
                },
                {
                  id: 119,
                  name: "Designer Festive Anarkali",
                  category: "Anarkali",
                  price: 92.00,
                  image: "images/anarkali/designer_festive.jpg",
                  description: "High-end festive Anarkali with crystal embellishments and rich finish."
                },
                {
                  id: 120,
                  name: "Gota Patti Anarkali Set",
                  category: "Anarkali",
                  price: 67.99,
                  image: "images/anarkali/gota_patti.jpg",
                  description: "Traditional Anarkali with Gota Patti work and matching churidar."
                }
            ],
            "Palazzos": [
                {
                  id: 201,
                  name: "White Cotton Flared Palazzo",
                  category: "Palazzo",
                  price: 18.99,
                  image: "images/palazzo/white_cotton.jpg",
                  description: "Classic white cotton palazzo with flared hem and drawstring waist."
                },
                {
                  id: 202,
                  name: "Black Straight Palazzo",
                  category: "Palazzo",
                  price: 21.50,
                  image: "images/palazzo/black_straight.jpg",
                  description: "Solid black straight palazzo suitable for office and casual wear."
                },
                {
                  id: 203,
                  name: "Printed Rayon Palazzo",
                  category: "Palazzo",
                  price: 23.00,
                  image: "images/palazzo/printed_rayon.jpg",
                  description: "Colorful rayon palazzo with ethnic prints and elastic waistband."
                },
                {
                  id: 204,
                  name: "Pastel Pleated Palazzo",
                  category: "Palazzo",
                  price: 25.75,
                  image: "images/palazzo/pastel_pleated.jpg",
                  description: "Elegant pleated palazzo in soft pastel shade with side zip."
                },
                {
                  id: 205,
                  name: "Chikankari Embroidered Palazzo",
                  category: "Palazzo",
                  price: 29.99,
                  image: "images/palazzo/chikankari.jpg",
                  description: "Delicate white Chikankari embroidered palazzo for a traditional look."
                },
                {
                  id: 206,
                  name: "High Waist Palazzo with Belt",
                  category: "Palazzo",
                  price: 27.00,
                  image: "images/palazzo/high_waist_belted.jpg",
                  description: "Stylish high-waist palazzo with fabric belt and wide-leg fit."
                },
                {
                  id: 207,
                  name: "Denim Look Palazzo Pants",
                  category: "Palazzo",
                  price: 26.45,
                  image: "images/palazzo/denim_look.jpg",
                  description: "Casual palazzo with denim texture and stretchable fabric."
                },
                {
                  id: 208,
                  name: "Ankle Length Checked Palazzo",
                  category: "Palazzo",
                  price: 22.90,
                  image: "images/palazzo/checked_ankle.jpg",
                  description: "Smart checked print palazzo with ankle length and formal vibe."
                },
                {
                  id: 209,
                  name: "Crepe Palazzo with Side Slit",
                  category: "Palazzo",
                  price: 24.75,
                  image: "images/palazzo/crepe_sideslit.jpg",
                  description: "Crepe palazzo pants with side slit, ideal for Indo-Western outfits."
                },
                {
                  id: 210,
                  name: "Floral Printed Flowy Palazzo",
                  category: "Palazzo",
                  price: 20.25,
                  image: "images/palazzo/floral_flowy.jpg",
                  description: "Vibrant floral print palazzo with airy feel and drawstring tie."
                },
                {
                  id: 211,
                  name: "Silk Blend Festive Palazzo",
                  category: "Palazzo",
                  price: 33.00,
                  image: "images/palazzo/silk_blend.jpg",
                  description: "Festive silk blend palazzo with shine and structure."
                },
                {
                  id: 212,
                  name: "Wrap Style Palazzo",
                  category: "Palazzo",
                  price: 28.60,
                  image: "images/palazzo/wrap_style.jpg",
                  description: "Trendy wrap-style palazzo with asymmetric hem."
                },
                {
                  id: 213,
                  name: "Crinkled Cotton Palazzo",
                  category: "Palazzo",
                  price: 19.50,
                  image: "images/palazzo/crinkled_cotton.jpg",
                  description: "Boho-chic crinkled cotton palazzo with a flowy silhouette."
                },
                {
                  id: 214,
                  name: "Ethnic Brocade Palazzo",
                  category: "Palazzo",
                  price: 31.20,
                  image: "images/palazzo/brocade.jpg",
                  description: "Heavy ethnic brocade palazzo perfect for weddings and festive wear."
                },
                {
                  id: 215,
                  name: "Striped Formal Palazzo",
                  category: "Palazzo",
                  price: 26.00,
                  image: "images/palazzo/striped_formal.jpg",
                  description: "Vertical striped palazzo for office and smart casual styling."
                },
                {
                  id: 216,
                  name: "Tie-Dye Bohemian Palazzo",
                  category: "Palazzo",
                  price: 22.30,
                  image: "images/palazzo/tiedye_boho.jpg",
                  description: "Tie-dye palazzo with boho vibes and flared cut."
                },
                {
                  id: 217,
                  name: "Lace Trim Palazzo",
                  category: "Palazzo",
                  price: 24.99,
                  image: "images/palazzo/lace_trim.jpg",
                  description: "Soft palazzo pants with delicate lace trimming at the bottom."
                },
                {
                  id: 218,
                  name: "Wide-Leg Linen Palazzo",
                  category: "Palazzo",
                  price: 30.00,
                  image: "images/palazzo/linen_wideleg.jpg",
                  description: "Breathable linen palazzo with wide-leg silhouette and drawstring."
                },
                {
                  id: 219,
                  name: "Scallop Hem Palazzo",
                  category: "Palazzo",
                  price: 28.95,
                  image: "images/palazzo/scallop_hem.jpg",
                  description: "Elegant scallop hem palazzo pants with feminine appeal."
                },
                {
                  id: 220,
                  name: "Printed Palazzo with Pockets",
                  category: "Palazzo",
                  price: 23.75,
                  image: "images/palazzo/printed_pockets.jpg",
                  description: "Functional printed palazzo with side pockets and elastic waist."
                }
            ],   
            "Dupattas": [
                {
                  id: 301,
                  name: "Banarasi Silk Dupatta",
                  category: "Dupatta",
                  price: 29.99,
                  image: "images/dupatta/banarasi_silk.jpg",
                  description: "Traditional Banarasi silk dupatta with golden zari border."
                },
                {
                  id: 302,
                  name: "Chiffon Printed Dupatta",
                  category: "Dupatta",
                  price: 14.50,
                  image: "images/dupatta/chiffon_printed.jpg",
                  description: "Lightweight chiffon dupatta with floral prints and soft texture."
                },
                {
                  id: 303,
                  name: "Cotton Lace Border Dupatta",
                  category: "Dupatta",
                  price: 17.25,
                  image: "images/dupatta/cotton_lace.jpg",
                  description: "Breathable cotton dupatta with intricate lace trimming."
                },
                {
                  id: 304,
                  name: "Net Embroidered Dupatta",
                  category: "Dupatta",
                  price: 22.75,
                  image: "images/dupatta/net_embroidery.jpg",
                  description: "Stylish net dupatta with sequin embroidery and scalloped edges."
                },
                {
                  id: 305,
                  name: "Phulkari Embroidered Dupatta",
                  category: "Dupatta",
                  price: 26.50,
                  image: "images/dupatta/phulkari.jpg",
                  description: "Colorful Phulkari hand-embroidered dupatta with vibrant patterns."
                },
                {
                  id: 306,
                  name: "Georgette Party Wear Dupatta",
                  category: "Dupatta",
                  price: 24.00,
                  image: "images/dupatta/georgette_party.jpg",
                  description: "Elegant georgette dupatta ideal for party and festive looks."
                },
                {
                  id: 307,
                  name: "Bandhani Print Dupatta",
                  category: "Dupatta",
                  price: 19.99,
                  image: "images/dupatta/bandhani.jpg",
                  description: "Traditional Bandhani printed dupatta with contrast border."
                },
                {
                  id: 308,
                  name: "Organza Dupatta with Gold Border",
                  category: "Dupatta",
                  price: 27.99,
                  image: "images/dupatta/organza_gold.jpg",
                  description: "Shimmer organza dupatta with elegant golden border."
                },
                {
                  id: 309,
                  name: "Crushed Tissue Dupatta",
                  category: "Dupatta",
                  price: 21.50,
                  image: "images/dupatta/crushed_tissue.jpg",
                  description: "Light and crushed tissue fabric dupatta with subtle shine."
                },
                {
                  id: 310,
                  name: "Ajrakh Block Printed Dupatta",
                  category: "Dupatta",
                  price: 25.00,
                  image: "images/dupatta/ajrakh_block.jpg",
                  description: "Authentic hand-block Ajrakh printed dupatta on pure cotton."
                },
                {
                  id: 311,
                  name: "Zari Border Cotton Dupatta",
                  category: "Dupatta",
                  price: 18.90,
                  image: "images/dupatta/zari_border.jpg",
                  description: "Minimalist cotton dupatta with a touch of gold zari border."
                },
                {
                  id: 312,
                  name: "Dual Tone Dupatta",
                  category: "Dupatta",
                  price: 23.95,
                  image: "images/dupatta/dual_tone.jpg",
                  description: "Dual tone gradient dupatta with dyed finishing and soft texture."
                },
                {
                  id: 313,
                  name: "Kalamkari Printed Dupatta",
                  category: "Dupatta",
                  price: 20.45,
                  image: "images/dupatta/kalamkari.jpg",
                  description: "Ethnic Kalamkari print dupatta with earthy tones and heritage art."
                },
                {
                  id: 314,
                  name: "Kota Doria Handwoven Dupatta",
                  category: "Dupatta",
                  price: 28.00,
                  image: "images/dupatta/kota_doria.jpg",
                  description: "Lightweight and airy Kota Doria dupatta, handwoven with care."
                },
                {
                  id: 315,
                  name: "Shibori Tie-Dye Dupatta",
                  category: "Dupatta",
                  price: 22.99,
                  image: "images/dupatta/shibori_tie_dye.jpg",
                  description: "Handcrafted Shibori tie-dye dupatta in soft modal silk."
                },
                {
                  id: 316,
                  name: "Mirror Work Dupatta",
                  category: "Dupatta",
                  price: 30.00,
                  image: "images/dupatta/mirror_work.jpg",
                  description: "Festive dupatta with mirror embellishments and vibrant threads."
                },
                {
                  id: 317,
                  name: "Velvet Embellished Dupatta",
                  category: "Dupatta",
                  price: 34.75,
                  image: "images/dupatta/velvet_embellished.jpg",
                  description: "Heavy velvet dupatta with border embellishment, ideal for winter weddings."
                },
                {
                  id: 318,
                  name: "Gota Patti Work Dupatta",
                  category: "Dupatta",
                  price: 31.99,
                  image: "images/dupatta/gota_patti.jpg",
                  description: "Traditional Gota Patti work dupatta with shine and texture."
                },
                {
                  id: 319,
                  name: "Multi-color Digital Printed Dupatta",
                  category: "Dupatta",
                  price: 19.49,
                  image: "images/dupatta/digital_printed.jpg",
                  description: "Trendy digital print dupatta with multi-color geometric patterns."
                },
                {
                  id: 320,
                  name: "Tissue Gold Foil Dupatta",
                  category: "Dupatta",
                  price: 26.80,
                  image: "images/dupatta/gold_foil_tissue.jpg",
                  description: "Shimmer tissue dupatta with golden foil print all over."
                }
            ],
            "Bras": [
                {
                  id: 401,
                  name: "T-Shirt Bra",
                  category: "Bra",
                  price: 14.99,
                  image: "images/bras/tshirt_bra.jpg",
                  description: "Seamless T-shirt bra with molded cups for a smooth finish under clothes."
                },
                {
                  id: 402,
                  name: "Padded Wired Bra",
                  category: "Bra",
                  price: 18.50,
                  image: "images/bras/padded_wired.jpg",
                  description: "Lightly padded, underwired bra for maximum lift and shape."
                },
                {
                  id: 403,
                  name: "Non-Padded Cotton Bra",
                  category: "Bra",
                  price: 10.99,
                  image: "images/bras/non_padded_cotton.jpg",
                  description: "Soft cotton bra without padding, ideal for everyday comfort."
                },
                {
                  id: 404,
                  name: "Full Coverage Bra",
                  category: "Bra",
                  price: 16.00,
                  image: "images/bras/full_coverage.jpg",
                  description: "High coverage bra for better support and no spillage."
                },
                {
                  id: 405,
                  name: "Lace Bralette",
                  category: "Bra",
                  price: 19.99,
                  image: "images/bras/lace_bralette.jpg",
                  description: "Stylish lace bralette with adjustable straps and stretch fabric."
                },
                {
                  id: 406,
                  name: "Strapless Bra",
                  category: "Bra",
                  price: 22.00,
                  image: "images/bras/strapless.jpg",
                  description: "Supportive strapless bra with silicone grip for no-slip hold."
                },
                {
                  id: 407,
                  name: "Sports Bra - High Impact",
                  category: "Bra",
                  price: 25.99,
                  image: "images/bras/high_impact_sports.jpg",
                  description: "High-impact sports bra for gym, running, and intense workouts."
                },
                {
                  id: 408,
                  name: "Front Open Bra",
                  category: "Bra",
                  price: 17.49,
                  image: "images/bras/front_open.jpg",
                  description: "Front closure bra with soft fabric and racerback design."
                },
                {
                  id: 409,
                  name: "Push-Up Bra",
                  category: "Bra",
                  price: 20.75,
                  image: "images/bras/push_up.jpg",
                  description: "Push-up bra with extra padding for enhanced cleavage."
                },
                {
                  id: 410,
                  name: "Maternity/Nursing Bra",
                  category: "Bra",
                  price: 21.50,
                  image: "images/bras/nursing_bra.jpg",
                  description: "Comfortable nursing bra with easy front flaps for feeding."
                },
                {
                  id: 411,
                  name: "Convertible Multiway Bra",
                  category: "Bra",
                  price: 24.99,
                  image: "images/bras/multiway.jpg",
                  description: "Bra with detachable straps for multiple styling options."
                },
                {
                  id: 412,
                  name: "Plunge Bra",
                  category: "Bra",
                  price: 19.95,
                  image: "images/bras/plunge.jpg",
                  description: "Low-cut plunge bra suitable for deep neck outfits."
                },
                {
                  id: 413,
                  name: "Wirefree Padded Bra",
                  category: "Bra",
                  price: 15.25,
                  image: "images/bras/wirefree_padded.jpg",
                  description: "Comfy padded bra without underwires for daily wear."
                },
                {
                  id: 414,
                  name: "Longline Lace Bra",
                  category: "Bra",
                  price: 26.50,
                  image: "images/bras/longline_lace.jpg",
                  description: "Romantic longline lace bra offering gentle support and coverage."
                },
                {
                  id: 415,
                  name: "Minimizer Bra",
                  category: "Bra",
                  price: 23.00,
                  image: "images/bras/minimizer.jpg",
                  description: "Minimizer bra that reduces the bust appearance while supporting posture."
                }
            ],
            "Panties": [
                {
                  id: 501,
                  name: "Cotton Mid-Rise Brief",
                  category: "Panty",
                  price: 6.99,
                  image: "images/panties/cotton_midrise.jpg",
                  description: "Soft and breathable cotton brief with full coverage and comfort fit."
                },
                {
                  id: 502,
                  name: "Seamless Hipster Panty",
                  category: "Panty",
                  price: 8.50,
                  image: "images/panties/seamless_hipster.jpg",
                  description: "No-show hipster panties made with stretchable microfibre."
                },
                {
                  id: 503,
                  name: "Lace Bikini Panty",
                  category: "Panty",
                  price: 9.25,
                  image: "images/panties/lace_bikini.jpg",
                  description: "Delicate lace bikini with mid-coverage and soft waistband."
                },
                {
                  id: 504,
                  name: "High-Waist Tummy Control Panty",
                  category: "Panty",
                  price: 10.99,
                  image: "images/panties/tummy_control.jpg",
                  description: "High-waist shaping panty with light tummy control support."
                },
                {
                  id: 505,
                  name: "Thong Panty",
                  category: "Panty",
                  price: 7.75,
                  image: "images/panties/thong.jpg",
                  description: "Minimalist thong panty ideal for bodycon outfits."
                },
                {
                  id: 506,
                  name: "Boyshort Panty",
                  category: "Panty",
                  price: 8.20,
                  image: "images/panties/boyshort.jpg",
                  description: "Boyshort style with extra coverage and ultra-soft fabric."
                },
                {
                  id: 507,
                  name: "Modal Hipster Panty",
                  category: "Panty",
                  price: 9.50,
                  image: "images/panties/modal_hipster.jpg",
                  description: "Silky modal hipster panty with antimicrobial finish."
                },
                {
                  id: 508,
                  name: "Printed Bikini Panty",
                  category: "Panty",
                  price: 6.25,
                  image: "images/panties/printed_bikini.jpg",
                  description: "Fun printed bikini with soft elastic and medium coverage."
                },
                {
                  id: 509,
                  name: "No VPL Seamless Brief",
                  category: "Panty",
                  price: 9.99,
                  image: "images/panties/no_vpl.jpg",
                  description: "Invisible under clothing with laser-cut edges."
                },
                {
                  id: 510,
                  name: "Mesh Detail Panty",
                  category: "Panty",
                  price: 11.25,
                  image: "images/panties/mesh_detail.jpg",
                  description: "Sheer mesh panel panty for a touch of elegance and breathability."
                },
                {
                  id: 511,
                  name: "Satin Finish Panty",
                  category: "Panty",
                  price: 10.50,
                  image: "images/panties/satin_finish.jpg",
                  description: "Luxurious satin-finish panty for a smooth, stylish look."
                },
                {
                  id: 512,
                  name: "Cotton Stretch Brief",
                  category: "Panty",
                  price: 7.00,
                  image: "images/panties/cotton_stretch.jpg",
                  description: "Stretchable cotton panty with reinforced seams for durability."
                },
                {
                  id: 513,
                  name: "High-Cut Panty",
                  category: "Panty",
                  price: 7.95,
                  image: "images/panties/high_cut.jpg",
                  description: "High-cut style for added leg comfort and flattering fit."
                },
                {
                  id: 514,
                  name: "Lace Trim Brief",
                  category: "Panty",
                  price: 8.60,
                  image: "images/panties/lace_trim.jpg",
                  description: "Cotton blend panty with elegant lace trim around the waist."
                },
                {
                  id: 515,
                  name: "Maternity Panty - Full Coverage",
                  category: "Panty",
                  price: 9.99,
                  image: "images/panties/maternity_full.jpg",
                  description: "Ultra-soft maternity panty with stretchable fabric for growing bump."
                }
            ],
            "Shapewear": [
                {
                  id: 601,
                  name: "High-Waist Tummy Tuck Shapewear",
                  category: "Shapewear",
                  price: 24.99,
                  image: "images/shapewear/high_waist_tummy.jpg",
                  description: "Firm control shapewear that flattens the tummy and defines the waistline."
                },
                {
                  id: 602,
                  name: "Seamless Bodysuit Shaper",
                  category: "Shapewear",
                  price: 34.00,
                  image: "images/shapewear/seamless_bodysuit.jpg",
                  description: "All-in-one bodysuit shaper with seamless compression for smooth curves."
                },
                {
                  id: 603,
                  name: "Thigh Slimmer Shapewear",
                  category: "Shapewear",
                  price: 21.50,
                  image: "images/shapewear/thigh_slimmer.jpg",
                  description: "Soft and breathable thigh slimmer that prevents chafing and smooths thighs."
                },
                {
                  id: 604,
                  name: "Mid-Thigh High Waist Shaper Shorts",
                  category: "Shapewear",
                  price: 27.99,
                  image: "images/shapewear/highwaist_shorts.jpg",
                  description: "Firm control shaper shorts that sculpt tummy, hips, and thighs."
                },
                {
                  id: 605,
                  name: "Back Support Shaping Camisole",
                  category: "Shapewear",
                  price: 29.75,
                  image: "images/shapewear/shaping_cami.jpg",
                  description: "Smoothing camisole with light back support and tummy control."
                },
                {
                  id: 606,
                  name: "Control Brief Panty Shapewear",
                  category: "Shapewear",
                  price: 19.95,
                  image: "images/shapewear/control_brief.jpg",
                  description: "High-rise control brief with shaping panels and a snug fit."
                },
                {
                  id: 607,
                  name: "Open-Bust Torsette Body Shaper",
                  category: "Shapewear",
                  price: 31.90,
                  image: "images/shapewear/torsette.jpg",
                  description: "Open-bust shaper that lets you wear your own bra with full torso control."
                },
                {
                  id: 608,
                  name: "Postpartum Recovery Shapewear",
                  category: "Shapewear",
                  price: 32.00,
                  image: "images/shapewear/postpartum.jpg",
                  description: "Comfortable postpartum belly wrap and lower body shaper."
                },
                {
                  id: 609,
                  name: "Lace Trim Shaping Brief",
                  category: "Shapewear",
                  price: 22.50,
                  image: "images/shapewear/lace_brief.jpg",
                  description: "Elegant shaping brief with tummy control and soft lace accents."
                },
                {
                  id: 610,
                  name: "Corset Waist Trainer",
                  category: "Shapewear",
                  price: 35.99,
                  image: "images/shapewear/waist_trainer.jpg",
                  description: "Classic steel-boned corset for waist training and instant shaping."
                },
                {
                  id: 611,
                  name: "Control Tank Top Shapewear",
                  category: "Shapewear",
                  price: 26.45,
                  image: "images/shapewear/control_tank.jpg",
                  description: "Compression tank top that smooths your upper body under clothes."
                },
                {
                  id: 612,
                  name: "Hip Enhancer Padded Shapewear",
                  category: "Shapewear",
                  price: 33.25,
                  image: "images/shapewear/hip_enhancer.jpg",
                  description: "Shapewear with removable pads to enhance hips and backside."
                },
                {
                  id: 613,
                  name: "Full Body Slip Shapewear",
                  category: "Shapewear",
                  price: 38.50,
                  image: "images/shapewear/full_body_slip.jpg",
                  description: "Under-dress full slip with light compression for a flawless silhouette."
                },
                {
                  id: 614,
                  name: "Saree Shapewear Skirt",
                  category: "Shapewear",
                  price: 20.99,
                  image: "images/shapewear/saree_shapewear.jpg",
                  description: "Specifically designed for sarees, this skirt provides shape and comfort."
                },
                {
                  id: 615,
                  name: "Butt Lifter Shapewear",
                  category: "Shapewear",
                  price: 28.60,
                  image: "images/shapewear/butt_lifter.jpg",
                  description: "Invisible panty-style shapewear with booty-enhancing lift."
                }
            ],
            "Sleepwear": [
                {
                  id: 701,
                  name: "Cotton Button-Down Pajama Set",
                  category: "Sleepwear",
                  price: 29.99,
                  image: "images/sleepwear/cotton_pajama_set.jpg",
                  description: "Soft cotton pajama set with long-sleeved shirt and full-length pants."
                },
                {
                  id: 702,
                  name: "Sleeveless Nightdress",
                  category: "Sleepwear",
                  price: 18.50,
                  image: "images/sleepwear/sleeveless_nightdress.jpg",
                  description: "Comfy sleeveless nightdress with scoop neck, perfect for summer nights."
                },
                {
                  id: 703,
                  name: "Flannel Pajama Set",
                  category: "Sleepwear",
                  price: 34.75,
                  image: "images/sleepwear/flannel_pajama.jpg",
                  description: "Warm flannel set with cozy top and plaid trousers for winter comfort."
                },
                {
                  id: 704,
                  name: "Lace Trim Satin Chemise",
                  category: "Sleepwear",
                  price: 24.99,
                  image: "images/sleepwear/satin_chemise.jpg",
                  description: "Elegant satin chemise with lace detailing and adjustable straps."
                },
                {
                  id: 705,
                  name: "Shorts & Tee Sleep Set",
                  category: "Sleepwear",
                  price: 22.00,
                  image: "images/sleepwear/shorts_tee_set.jpg",
                  description: "Cotton T-shirt and shorts sleep set with fun prints."
                },
                {
                  id: 706,
                  name: "Robe and Nighty Combo",
                  category: "Sleepwear",
                  price: 35.00,
                  image: "images/sleepwear/robe_nighty_combo.jpg",
                  description: "Matching robe and nighty combo set in modal fabric for lounge luxury."
                },
                {
                  id: 707,
                  name: "Thermal Sleepwear Set",
                  category: "Sleepwear",
                  price: 31.99,
                  image: "images/sleepwear/thermal_set.jpg",
                  description: "Thermal long-sleeve and leggings set to keep you warm and snug."
                },
                {
                  id: 708,
                  name: "Printed Kaftan Nightwear",
                  category: "Sleepwear",
                  price: 19.95,
                  image: "images/sleepwear/kaftan_nightwear.jpg",
                  description: "Loose-fit kaftan style nightwear with vibrant ethnic prints."
                },
                {
                  id: 709,
                  name: "Velvet Lounge Set",
                  category: "Sleepwear",
                  price: 38.50,
                  image: "images/sleepwear/velvet_lounge_set.jpg",
                  description: "Luxurious velvet lounge set with top and jogger pants."
                },
                {
                  id: 710,
                  name: "Satin Camisole & Shorts Set",
                  category: "Sleepwear",
                  price: 26.49,
                  image: "images/sleepwear/satin_camisole_shorts.jpg",
                  description: "Stylish satin camisole with matching shorts and lace trim."
                },
                {
                  id: 711,
                  name: "Cotton Nightshirt",
                  category: "Sleepwear",
                  price: 20.00,
                  image: "images/sleepwear/cotton_nightshirt.jpg",
                  description: "Casual cotton nightshirt with button-up design and relaxed fit."
                },
                {
                  id: 712,
                  name: "Fleece Hooded Sleep Set",
                  category: "Sleepwear",
                  price: 36.25,
                  image: "images/sleepwear/fleece_hooded.jpg",
                  description: "Hooded fleece top with matching joggers for cozy winter nights."
                },
                {
                  id: 713,
                  name: "Maternity Nightwear Gown",
                  category: "Sleepwear",
                  price: 27.80,
                  image: "images/sleepwear/maternity_gown.jpg",
                  description: "Stretchable, feeding-friendly maternity gown with soft front access."
                },
                {
                  id: 714,
                  name: "Halter Neck Babydoll Sleepwear",
                  category: "Sleepwear",
                  price: 28.00,
                  image: "images/sleepwear/halter_babydoll.jpg",
                  description: "Elegant babydoll with halter neck and sheer lace detailing."
                },
                {
                  id: 715,
                  name: "3-Piece Lounge Set",
                  category: "Sleepwear",
                  price: 42.99,
                  image: "images/sleepwear/3piece_lounge_set.jpg",
                  description: "Matching bralette, shorts, and shrug in cozy ribbed fabric."
                }
            ],
            "footwear": [
                {
                  name: "Block Heel Sandals",
                  price: 39.99,
                  img: "https://example.com/women_heel1.jpg",
                  desc: "Stylish and comfortable block heels.",
                  reviews: []
                },
                {
                  name: "Ballet Flats",
                  price: 29.50,
                  img: "https://https://example.com/women_flats.jpg",
                  desc: "Elegant flats for daily wear.",
                  reviews: []
                },
                {
                  name: "Sneakers",
                  price: 49.99,
                  img: "https://example.com/women_sneakers.jpg",
                  desc: "Trendy and sporty look.",
                  reviews: []
                },
                {
                  name: "Wedge Sandals",
                  price: 44.99,
                  img: "https://example.com/women_wedges.jpg",
                  desc: "Adds height with comfort.",
                  reviews: []
                },
                {
                  name: "Ethnic Mojaris",
                  price: 34.0,
                  img: "https://example.com/women_mojari.jpg",
                  desc: "Traditional festive wear.",
                  reviews: []
                },
                {
                  name: "Ankle Boots",
                  price: 59.95,
                  img: "https://example.com/women_boots.jpg",
                  desc: "Perfect for winter outfits.",
                  reviews: []
                },
                {
                  name: "Flip Flops",
                  price: 14.75,
                  img: "https://example.com/women_flipflops.jpg",
                  desc: "Easy slip-ons for everyday.",
                  reviews: []
                },
                {
                  name: "Loafers",
                  price: 32.99,
                  img: "https://example.com/women_loafers.jpg",
                  desc: "Smart casual wear.",
                  reviews: []
                },
                {
                  name: "Kitten Heels",
                  price: 42.0,
                  img: "https://example.com/women_kittenheels.jpg",
                  desc: "Low-heel elegance.",
                  reviews: []
                },
                {
                  name: "Kolhapuri Chappals",
                  price: 25.99,
                  img: "https://example.com/women_kolhapuri.jpg",
                  desc: "Indian ethnic touch.",
                  reviews: []
                }
            ],
            
            "accessories": [
                {
                  name: "Statement Necklace",
                  price: 19.99,
                  img: "https://example.com/necklace.jpg",
                  desc: "Perfect for evening outfits.",
                  reviews: []
                },
                {
                  name: "Designer Handbag",
                  price: 79.5,
                  img: "https://example.com/handbag.jpg",
                  desc: "Trendy and spacious.",
                  reviews: []
                },
                {
                  name: "Hoop Earrings",
                  price: 9.99,
                  img: "https://example.com/earrings.jpg",
                  desc: "Simple yet elegant.",
                  reviews: []
                },
                {
                  name: "Sunglasses",
                  price: 24.99,
                  img: "https://example.com/sunglasses.jpg",
                  desc: "UV protection and style.",
                  reviews: []
                },
                {
                  name: "Silk Scarf",
                  price: 18.75,
                  img: "https://example.com/scarf.jpg",
                  desc: "Add charm to any look.",
                  reviews: []
                },
                {
                  name: "Hair Clips Set",
                  price: 7.5,
                  img: "https://example.com/hairclips.jpg",
                  desc: "Trendy hair accessories.",
                  reviews: []
                },
                {
                  name: "Bracelet Stack",
                  price: 15.99,
                  img: "https://example.com/bracelet.jpg",
                  desc: "Mix and match styles.",
                  reviews: []
                },
                {
                  name: "Tote Bag",
                  price: 45.0,
                  img: "https://example.com/tote.jpg",
                  desc: "Everyday utility with style.",
                  reviews: []
                },
                {
                  name: "Fashion Watch",
                  price: 59.99,
                  img: "https://example.com/watch.jpg",
                  desc: "Minimalist fashion timepiece.",
                  reviews: []
                },
                {
                  name: "Ethnic Bangles Set",
                  price: 22.25,
                  img: "https://example.com/bangles.jpg",
                  desc: "Colorful and traditional.",
                  reviews: []
                }
            ]
          },

    kids: [
        "boys"={
            "tshirts": [
                {
                    name: "Superhero Graphic T-Shirt",
                    price: 15.99,
                    img: "https://images.unsplash.com/photo-1620327447488-e17825e56f16?auto=format&fit=crop&w=400&q=80",
                    desc: "Cotton T-shirt with bold superhero print.",
                    reviews: []
                  },
                  {
                    name: "Striped Cotton T-Shirt",
                    price: 13.50,
                    img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f?auto=format&fit=crop&w=400&q=80",
                    desc: "Soft cotton tee with classic stripes.",
                    reviews: []
                  },
                  {
                    name: "Dinosaur Print T-Shirt",
                    price: 14.25,
                    img: "https://images.unsplash.com/photo-1575311373935-1bbca1fc0f54?auto=format&fit=crop&w=400&q=80",
                    desc: "Fun dino print tee, perfect for playtime.",
                    reviews: []
                  },
                  {
                    name: "Solid Color Crew Neck Tee",
                    price: 12.00,
                    img: "https://images.unsplash.com/photo-1618354691373-4347b2e7dc3e?auto=format&fit=crop&w=400&q=80",
                    desc: "Plain everyday cotton T-shirt.",
                    reviews: []
                  },
                  {
                    name: "Adventure Explorer T-Shirt",
                    price: 15.49,
                    img: "https://images.unsplash.com/photo-1585355411125-cf66dd1d0aa7?auto=format&fit=crop&w=400&q=80",
                    desc: "T-shirt with ‘Adventure’ text and mountain graphic.",
                    reviews: []
                  },
                  {
                    name: "Cartoon Face T-Shirt",
                    price: 13.99,
                    img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                    desc: "Playful cartoon face tee with bright colors.",
                    reviews: []
                  },
                  {
                    name: "Space Rocket Print Tee",
                    price: 14.75,
                    img: "https://images.unsplash.com/photo-1632053024617-d23decb44863?auto=format&fit=crop&w=400&q=80",
                    desc: "Space-themed T-shirt with rocket and stars.",
                    reviews: []
                  },
                  {
                    name: "Polo Neck T-Shirt",
                    price: 17.50,
                    img: "https://images.unsplash.com/photo-1589571894960-20bbe2828c94?auto=format&fit=crop&w=400&q=80",
                    desc: "Smart polo neck tee for casual outings.",
                    reviews: []
                  },
                  {
                    name: "Skateboard Print Tee",
                    price: 15.25,
                    img: "https://images.unsplash.com/photo-1592438955713-7e1562be5af2?auto=format&fit=crop&w=400&q=80",
                    desc: "Trendy T-shirt with skater boy vibes.",
                    reviews: []
                  },
                  {
                    name: "Cool Kid Slogan Tee",
                    price: 13.49,
                    img: "https://images.unsplash.com/photo-1520975922203-a7c4eb9a5c5a?auto=format&fit=crop&w=400&q=80",
                    desc: "Bold printed slogan ‘Cool Kid’ on chest.",
                    reviews: []
                  },
                  {
                    name: "Tie-Dye T-Shirt",
                    price: 16.00,
                    img: "https://images.unsplash.com/photo-1619983081634-74efcd9908b9?auto=format&fit=crop&w=400&q=80",
                    desc: "Trendy tie-dye cotton tee in vibrant shades.",
                    reviews: []
                  },
                  {
                    name: "Raglan Sleeve T-Shirt",
                    price: 14.99,
                    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
                    desc: "Contrast sleeve raglan tee for sporty style.",
                    reviews: []
                  },
                  {
                    name: "Animal Print Jungle Tee",
                    price: 13.25,
                    img: "https://images.unsplash.com/photo-1605325141153-61f88d7db07c?auto=format&fit=crop&w=400&q=80",
                    desc: "Fun jungle animal print for little explorers.",
                    reviews: []
                  },
                  {
                    name: "Football Theme T-Shirt",
                    price: 15.75,
                    img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80",
                    desc: "Perfect for football fans with jersey-like design.",
                    reviews: []
                  },
                  {
                    name: "Glow-in-the-Dark Print Tee",
                    price: 16.99,
                    img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                    desc: "Glow-in-the-dark monster eyes – fun at night!",
                    reviews: []
                  }
            ],
            "Shirts": [
                {
                  name: "Classic Checkered Shirt",
                  price: 19.99,
                  img: "https://images.unsplash.com/photo-1542060748-10c28b62716b?auto=format&fit=crop&w=400&q=80",
                  desc: "Button-down checkered shirt for a smart casual look.",
                  reviews: []
                },
                {
                  name: "Denim Shirt",
                  price: 21.50,
                  img: "https://images.unsplash.com/photo-1564468781191-6828f5bb4163?auto=format&fit=crop&w=400&q=80",
                  desc: "Lightweight denim shirt, perfect for layering.",
                  reviews: []
                },
                {
                  name: "Striped Cotton Shirt",
                  price: 18.75,
                  img: "https://images.unsplash.com/photo-1552068751-34cb52f742b2?auto=format&fit=crop&w=400&q=80",
                  desc: "Soft striped shirt for a cool summer vibe.",
                  reviews: []
                },
                {
                  name: "Printed Half-Sleeve Shirt",
                  price: 17.49,
                  img: "https://images.unsplash.com/photo-1617127365659-0f10d7ba60be?auto=format&fit=crop&w=400&q=80",
                  desc: "Playful printed shirt with tropical designs.",
                  reviews: []
                },
                {
                  name: "White Formal Shirt",
                  price: 20.99,
                  img: "https://images.unsplash.com/photo-1617127364416-bbd4aa083f86?auto=format&fit=crop&w=400&q=80",
                  desc: "Crisp white shirt for school or events.",
                  reviews: []
                },
                {
                  name: "Plaid Full Sleeve Shirt",
                  price: 22.25,
                  img: "https://images.unsplash.com/photo-1582896630265-39f06c88f2d1?auto=format&fit=crop&w=400&q=80",
                  desc: "Bold plaid design with roll-up sleeves.",
                  reviews: []
                },
                {
                  name: "Linen Mandarin Collar Shirt",
                  price: 23.49,
                  img: "https://images.unsplash.com/photo-1630447581124-599b92bc4f07?auto=format&fit=crop&w=400&q=80",
                  desc: "Light linen shirt with a stylish mandarin collar.",
                  reviews: []
                },
                {
                  name: "Printed Party Shirt",
                  price: 24.00,
                  img: "https://images.unsplash.com/photo-1617127364692-4b64b7e20b0f?auto=format&fit=crop&w=400&q=80",
                  desc: "Vibrant party shirt with fun motifs.",
                  reviews: []
                },
                {
                  name: "Chambray Shirt",
                  price: 19.25,
                  img: "https://images.unsplash.com/photo-1622467404891-028f4e0f5073?auto=format&fit=crop&w=400&q=80",
                  desc: "Casual chambray shirt with contrast stitching.",
                  reviews: []
                },
                {
                  name: "Flannel Shirt",
                  price: 25.75,
                  img: "https://images.unsplash.com/photo-1618354604604-5f4c2bf87ddd?auto=format&fit=crop&w=400&q=80",
                  desc: "Cozy flannel shirt for cooler days.",
                  reviews: []
                },
                {
                  name: "Hawaiian Print Shirt",
                  price: 17.95,
                  img: "https://images.unsplash.com/photo-1552068751-34cb52f742b2?auto=format&fit=crop&w=400&q=80",
                  desc: "Bright floral prints, ideal for summer.",
                  reviews: []
                },
                {
                  name: "Short Sleeve Oxford Shirt",
                  price: 20.49,
                  img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80",
                  desc: "Oxford-style with button collar and chest pocket.",
                  reviews: []
                },
                {
                  name: "Pastel Colored Shirt",
                  price: 16.99,
                  img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                  desc: "Soft pastel tone shirt, easy on the eyes.",
                  reviews: []
                },
                {
                  name: "Dual-Tone Colorblock Shirt",
                  price: 23.00,
                  img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f?auto=format&fit=crop&w=400&q=80",
                  desc: "Trendy dual-tone design with button-down front.",
                  reviews: []
                },
                {
                  name: "School Uniform Shirt",
                  price: 14.49,
                  img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
                  desc: "Standard uniform shirt, easy wash & wear.",
                  reviews: []
                }
            ],
            "Hoodies": [
                {
                  name: "Dino Print Zip-Up Hoodie",
                  price: 24.99,
                  img: "https://images.unsplash.com/photo-1589561253898-768105ca91a0?auto=format&fit=crop&w=400&q=80",
                  desc: "Fun dinosaur print hoodie with full zip and pockets.",
                  reviews: []
                },
                {
                  name: "Solid Color Pullover Hoodie",
                  price: 22.49,
                  img: "https://images.unsplash.com/photo-1619626105446-d8a26056df9e?auto=format&fit=crop&w=400&q=80",
                  desc: "Comfortable fleece hoodie in classic solid colors.",
                  reviews: []
                },
                {
                  name: "Cartoon Character Hoodie",
                  price: 25.00,
                  img: "https://images.unsplash.com/photo-1585425902040-f0f58c79cde6?auto=format&fit=crop&w=400&q=80",
                  desc: "Hoodie featuring kids' favorite cartoon characters.",
                  reviews: []
                },
                {
                  name: "Camouflage Hoodie",
                  price: 26.50,
                  img: "https://images.unsplash.com/photo-1589561084283-930aa7b1a5b4?auto=format&fit=crop&w=400&q=80",
                  desc: "Trendy camo print hoodie for an adventurous look.",
                  reviews: []
                },
                {
                  name: "Fleece Lined Hoodie",
                  price: 28.99,
                  img: "https://images.unsplash.com/photo-1592438955713-7e1562be5af2?auto=format&fit=crop&w=400&q=80",
                  desc: "Extra warm fleece-lined hoodie for chilly days.",
                  reviews: []
                },
                {
                  name: "Zip Hoodie with Ears",
                  price: 23.75,
                  img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80",
                  desc: "Cute hoodie with animal ears on the hood.",
                  reviews: []
                },
                {
                  name: "Superhero Logo Hoodie",
                  price: 27.49,
                  img: "https://images.unsplash.com/photo-1605325141153-61f88d7db07c?auto=format&fit=crop&w=400&q=80",
                  desc: "Features bold superhero logos kids love.",
                  reviews: []
                },
                {
                  name: "Colorblock Hoodie",
                  price: 21.99,
                  img: "https://images.unsplash.com/photo-1618354691373-4347b2e7dc3e?auto=format&fit=crop&w=400&q=80",
                  desc: "Trendy colorblock pattern with adjustable hood.",
                  reviews: []
                },
                {
                  name: "College Style Hoodie",
                  price: 26.00,
                  img: "https://images.unsplash.com/photo-1617127364692-4b64b7e20b0f?auto=format&fit=crop&w=400&q=80",
                  desc: "Inspired by college team hoodies with bold text.",
                  reviews: []
                },
                {
                  name: "Glow-in-the-Dark Hoodie",
                  price: 29.99,
                  img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                  desc: "Print glows in the dark for extra fun at night!",
                  reviews: []
                },
                {
                  name: "Space Theme Pullover",
                  price: 24.00,
                  img: "https://images.unsplash.com/photo-1632053024617-d23decb44863?auto=format&fit=crop&w=400&q=80",
                  desc: "Outer-space graphics make this hoodie a hit.",
                  reviews: []
                },
                {
                  name: "Sherpa-Lined Hoodie",
                  price: 30.99,
                  img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f?auto=format&fit=crop&w=400&q=80",
                  desc: "Ultra-soft sherpa lining for max warmth.",
                  reviews: []
                },
                {
                  name: "Abstract Printed Hoodie",
                  price: 22.75,
                  img: "https://images.unsplash.com/photo-1575311373935-1bbca1fc0f54?auto=format&fit=crop&w=400&q=80",
                  desc: "Modern print with cozy inner lining.",
                  reviews: []
                },
                {
                  name: "Sports Style Hoodie",
                  price: 26.49,
                  img: "https://images.unsplash.com/photo-1585355411125-cf66dd1d0aa7?auto=format&fit=crop&w=400&q=80",
                  desc: "Athletic hoodie with stripes on sleeves.",
                  reviews: []
                },
                {
                  name: "Lightweight Jersey Hoodie",
                  price: 20.50,
                  img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
                  desc: "Perfect hoodie for mild weather, made with jersey fabric.",
                  reviews: []
                }
            ],
            "Sweaters": [
                {
                  name: "Classic Cable Knit Sweater",
                  price: 26.99,
                  img: "https://images.unsplash.com/photo-1589561084283-930aa7b1a5b4?auto=format&fit=crop&w=400&q=80",
                  desc: "Timeless cable knit pattern in cozy wool blend.",
                  reviews: []
                },
                {
                  name: "Striped Pullover Sweater",
                  price: 24.50,
                  img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                  desc: "Vibrant stripes for a cheerful winter look.",
                  reviews: []
                },
                {
                  name: "Teddy Bear Embroidered Sweater",
                  price: 27.25,
                  img: "https://images.unsplash.com/photo-1617127365659-0f10d7ba60be?auto=format&fit=crop&w=400&q=80",
                  desc: "Adorable teddy motif with soft texture.",
                  reviews: []
                },
                {
                  name: "Half-Zip High Neck Sweater",
                  price: 29.99,
                  img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
                  desc: "Stylish half-zip sweater with warm mock neck.",
                  reviews: []
                },
                {
                  name: "Snowflake Pattern Sweater",
                  price: 28.50,
                  img: "https://images.unsplash.com/photo-1585355411125-cf66dd1d0aa7?auto=format&fit=crop&w=400&q=80",
                  desc: "Holiday-ready sweater with snowflake design.",
                  reviews: []
                },
                {
                  name: "Solid Crew Neck Sweater",
                  price: 22.49,
                  img: "https://images.unsplash.com/photo-1620327447488-e17825e56f16?auto=format&fit=crop&w=400&q=80",
                  desc: "Everyday sweater in soft-knit cotton.",
                  reviews: []
                },
                {
                  name: "Fair Isle Knit Sweater",
                  price: 30.00,
                  img: "https://images.unsplash.com/photo-1542060748-10c28b62716b?auto=format&fit=crop&w=400&q=80",
                  desc: "Warm and traditional Fair Isle patterns.",
                  reviews: []
                },
                {
                  name: "Sherpa Lined Sweater",
                  price: 31.75,
                  img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f?auto=format&fit=crop&w=400&q=80",
                  desc: "Extra cozy with soft sherpa interior.",
                  reviews: []
                },
                {
                  name: "Button-Up Cardigan Sweater",
                  price: 25.99,
                  img: "https://images.unsplash.com/photo-1605325141153-61f88d7db07c?auto=format&fit=crop&w=400&q=80",
                  desc: "Classic cardigan with front buttons and pockets.",
                  reviews: []
                },
                {
                  name: "V-Neck School Sweater",
                  price: 21.50,
                  img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80",
                  desc: "Ideal for school uniforms or formal wear.",
                  reviews: []
                },
                {
                  name: "Animal Pattern Knit Sweater",
                  price: 26.00,
                  img: "https://images.unsplash.com/photo-1575311373935-1bbca1fc0f54?auto=format&fit=crop&w=400&q=80",
                  desc: "Cute animal knit patterns for playful styling.",
                  reviews: []
                },
                {
                  name: "Chunky Waffle Knit Sweater",
                  price: 28.99,
                  img: "https://images.unsplash.com/photo-1589571894960-20bbe2828c94?auto=format&fit=crop&w=400&q=80",
                  desc: "Thick waffle texture for colder weather.",
                  reviews: []
                },
                {
                  name: "Lightweight Cotton Sweater",
                  price: 19.99,
                  img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f?auto=format&fit=crop&w=400&q=80",
                  desc: "Breathable and soft for layering.",
                  reviews: []
                },
                {
                  name: "Holiday Reindeer Sweater",
                  price: 29.00,
                  img: "https://images.unsplash.com/photo-1619626105446-d8a26056df9e?auto=format&fit=crop&w=400&q=80",
                  desc: "Festive reindeer design with a warm feel.",
                  reviews: []
                },
                {
                  name: "Hooded Sweater with Pockets",
                  price: 27.75,
                  img: "https://images.unsplash.com/photo-1589561253898-768105ca91a0?auto=format&fit=crop&w=400&q=80",
                  desc: "Pullover style sweater with hood and kangaroo pocket.",
                  reviews: []
                }
            ],
            "Sweatshirts": [
                {
                  name: "Superhero Print Sweatshirt",
                  price: 23.99,
                  img: "https://images.unsplash.com/photo-1617127364416-bbd4aa083f86?auto=format&fit=crop&w=400&q=80",
                  desc: "Cotton-rich sweatshirt with bold superhero graphic.",
                  reviews: []
                },
                {
                  name: "Dino Appliqué Sweatshirt",
                  price: 21.50,
                  img: "https://images.unsplash.com/photo-1589561084283-930aa7b1a5b4?auto=format&fit=crop&w=400&q=80",
                  desc: "Playful dinosaur appliqué with soft brushed inside.",
                  reviews: []
                },
                {
                  name: "Colorblock Crew Sweatshirt",
                  price: 22.00,
                  img: "https://images.unsplash.com/photo-1619626105446-d8a26056df9e?auto=format&fit=crop&w=400&q=80",
                  desc: "Trendy colorblock style in soft cotton blend.",
                  reviews: []
                },
                {
                  name: "Tiger Face Printed Sweatshirt",
                  price: 24.99,
                  img: "https://images.unsplash.com/photo-1585355411125-cf66dd1d0aa7?auto=format&fit=crop&w=400&q=80",
                  desc: "Bold tiger face on chest with fleece interior.",
                  reviews: []
                },
                {
                  name: "Zip Neck Sport Sweatshirt",
                  price: 25.49,
                  img: "https://images.unsplash.com/photo-1592438955713-7e1562be5af2?auto=format&fit=crop&w=400&q=80",
                  desc: "Sporty design with half zip and high neck.",
                  reviews: []
                },
                {
                  name: "Holiday Snowflake Sweatshirt",
                  price: 26.75,
                  img: "https://images.unsplash.com/photo-1589571894960-20bbe2828c94?auto=format&fit=crop&w=400&q=80",
                  desc: "Festive snowflake print, ideal for the holidays.",
                  reviews: []
                },
                {
                  name: "Space Rocket Sweatshirt",
                  price: 22.25,
                  img: "https://images.unsplash.com/photo-1632053024617-d23decb44863?auto=format&fit=crop&w=400&q=80",
                  desc: "Rocket and galaxy print for future astronauts.",
                  reviews: []
                },
                {
                  name: "Cartoon Eyes Glow Sweatshirt",
                  price: 23.49,
                  img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                  desc: "Fun glow-in-the-dark cartoon eyes on front.",
                  reviews: []
                },
                {
                  name: "Solid Navy Sweatshirt",
                  price: 20.00,
                  img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f?auto=format&fit=crop&w=400&q=80",
                  desc: "Everyday essential sweatshirt in solid navy blue.",
                  reviews: []
                },
                {
                  name: "College Style Number Sweatshirt",
                  price: 24.75,
                  img: "https://images.unsplash.com/photo-1618354604604-5f4c2bf87ddd?auto=format&fit=crop&w=400&q=80",
                  desc: "Varsity design with bold number print.",
                  reviews: []
                },
                {
                  name: "Fuzzy Bear Sweatshirt",
                  price: 27.99,
                  img: "https://images.unsplash.com/photo-1575311373935-1bbca1fc0f54?auto=format&fit=crop&w=400&q=80",
                  desc: "Bear face patch with fuzzy ears – super cute!",
                  reviews: []
                },
                {
                  name: "Camo Print Sweatshirt",
                  price: 22.49,
                  img: "https://images.unsplash.com/photo-1564468781191-6828f5bb4163?auto=format&fit=crop&w=400&q=80",
                  desc: "Military-inspired camo print for a cool look.",
                  reviews: []
                },
                {
                  name: "Adventure Club Sweatshirt",
                  price: 23.99,
                  img: "https://images.unsplash.com/photo-1585425902040-f0f58c79cde6?auto=format&fit=crop&w=400&q=80",
                  desc: "Graphic ‘Adventure Club’ print with ribbed trims.",
                  reviews: []
                },
                {
                  name: "Lightweight French Terry Sweatshirt",
                  price: 19.99,
                  img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
                  desc: "Breathable terry fabric perfect for spring/fall.",
                  reviews: []
                },
                {
                  name: "Hooded Sweatshirt with Pockets",
                  price: 26.50,
                  img: "https://images.unsplash.com/photo-1589561253898-768105ca91a0?auto=format&fit=crop&w=400&q=80",
                  desc: "Combo of hoodie and sweatshirt with kangaroo pocket.",
                  reviews: []
                }
            ],
            "Jeans": [
                {
                  name: "Classic Blue Slim Jeans",
                  price: 24.99,
                  img: "https://images.unsplash.com/photo-1589182373720-7fefb2c1f0f4?auto=format&fit=crop&w=400&q=80",
                  desc: "Slim fit with classic styling in blue denim.",
                  reviews: []
                },
                {
                  name: "Dark Wash Straight Jeans",
                  price: 26.50,
                  img: "https://images.unsplash.com/photo-1542060748-10c28b62716b?auto=format&fit=crop&w=400&q=80",
                  desc: "Straight-cut jeans in deep indigo tone.",
                  reviews: []
                },
                {
                  name: "Stretchable Skinny Jeans",
                  price: 23.99,
                  img: "https://images.unsplash.com/photo-1580894908360-38d35298fba7?auto=format&fit=crop&w=400&q=80",
                  desc: "Soft and flexible fabric for all-day movement.",
                  reviews: []
                },
                {
                  name: "Ripped Distressed Jeans",
                  price: 27.75,
                  img: "https://images.unsplash.com/photo-1622467404891-028f4e0f5073?auto=format&fit=crop&w=400&q=80",
                  desc: "Cool streetwear look with light distressing.",
                  reviews: []
                },
                {
                  name: "Black Denim Jeans",
                  price: 25.49,
                  img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80",
                  desc: "Classic black denim, easy to match with anything.",
                  reviews: []
                },
                {
                  name: "Washed Grey Tapered Jeans",
                  price: 26.99,
                  img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f?auto=format&fit=crop&w=400&q=80",
                  desc: "Trendy washed grey shade with tapered fit.",
                  reviews: []
                },
                {
                  name: "Jogger Fit Denim",
                  price: 24.25,
                  img: "https://images.unsplash.com/photo-1589571894960-20bbe2828c94?auto=format&fit=crop&w=400&q=80",
                  desc: "Denim joggers with elastic waist and cuffs.",
                  reviews: []
                },
                {
                  name: "Cargo Pocket Jeans",
                  price: 28.00,
                  img: "https://images.unsplash.com/photo-1564468781191-6828f5bb4163?auto=format&fit=crop&w=400&q=80",
                  desc: "Extra pockets and utility style.",
                  reviews: []
                },
                {
                  name: "Light Blue Summer Jeans",
                  price: 22.49,
                  img: "https://images.unsplash.com/photo-1592438955713-7e1562be5af2?auto=format&fit=crop&w=400&q=80",
                  desc: "Cool light-wash jeans, perfect for summer.",
                  reviews: []
                },
                {
                  name: "Faded Wash Relaxed Jeans",
                  price: 24.00,
                  img: "https://images.unsplash.com/photo-1585355411125-cf66dd1d0aa7?auto=format&fit=crop&w=400&q=80",
                  desc: "Casual loose-fit jeans with a gentle fade.",
                  reviews: []
                },
                {
                  name: "Patchwork Style Jeans",
                  price: 29.50,
                  img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                  desc: "Unique patch design adds playful personality.",
                  reviews: []
                },
                {
                  name: "Classic Regular Fit Jeans",
                  price: 21.75,
                  img: "https://images.unsplash.com/photo-1619626105446-d8a26056df9e?auto=format&fit=crop&w=400&q=80",
                  desc: "Timeless regular fit for everyday comfort.",
                  reviews: []
                },
                {
                  name: "Knee Panel Detail Jeans",
                  price: 27.25,
                  img: "https://images.unsplash.com/photo-1632053024617-d23decb44863?auto=format&fit=crop&w=400&q=80",
                  desc: "Stitched knee panels for an edgy style.",
                  reviews: []
                },
                {
                  name: "Soft Touch Pull-On Jeans",
                  price: 22.00,
                  img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
                  desc: "Elastic waistband for younger kids, no zippers.",
                  reviews: []
                },
                {
                  name: "Raw Hem Street Jeans",
                  price: 28.99,
                  img: "https://images.unsplash.com/photo-1618354691373-4347b2e7dc3e?auto=format&fit=crop&w=400&q=80",
                  desc: "Trendy raw edge hem and faded thighs.",
                  reviews: []
                }
            ],
            "Shorts": [
                {
                  name: "Classic Denim Shorts",
                  price: 18.99,
                  img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80",
                  desc: "Everyday denim shorts with rolled hems.",
                  reviews: []
                },
                {
                  name: "Cotton Pull-On Shorts",
                  price: 15.50,
                  img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                  desc: "Soft waistband shorts for easy dressing.",
                  reviews: []
                },
                {
                  name: "Cargo Pocket Shorts",
                  price: 19.75,
                  img: "https://images.unsplash.com/photo-1592438955713-7e1562be5af2?auto=format&fit=crop&w=400&q=80",
                  desc: "Multiple pockets for summer adventure.",
                  reviews: []
                },
                {
                  name: "Printed Summer Shorts",
                  price: 16.25,
                  img: "https://images.unsplash.com/photo-1585355411125-cf66dd1d0aa7?auto=format&fit=crop&w=400&q=80",
                  desc: "Fun tropical prints in lightweight fabric.",
                  reviews: []
                },
                {
                  name: "Knee-Length Sports Shorts",
                  price: 17.99,
                  img: "https://images.unsplash.com/photo-1589571894960-20bbe2828c94?auto=format&fit=crop&w=400&q=80",
                  desc: "Breathable material, great for sports or play.",
                  reviews: []
                },
                {
                  name: "Stripe Trim Jersey Shorts",
                  price: 14.49,
                  img: "https://images.unsplash.com/photo-1619626105446-d8a26056df9e?auto=format&fit=crop&w=400&q=80",
                  desc: "Soft jersey shorts with sporty stripes.",
                  reviews: []
                },
                {
                  name: "Drawstring Camo Shorts",
                  price: 18.00,
                  img: "https://images.unsplash.com/photo-1542060748-10c28b62716b?auto=format&fit=crop&w=400&q=80",
                  desc: "Comfortable camo design with adjustable fit.",
                  reviews: []
                },
                {
                  name: "Chino Style Shorts",
                  price: 20.25,
                  img: "https://images.unsplash.com/photo-1589561253898-768105ca91a0?auto=format&fit=crop&w=400&q=80",
                  desc: "Smart casual chino shorts for outings.",
                  reviews: []
                },
                {
                  name: "Ocean Blue Swim Shorts",
                  price: 16.99,
                  img: "https://images.unsplash.com/photo-1617127364692-4b64b7e20b0f?auto=format&fit=crop&w=400&q=80",
                  desc: "Quick-dry fabric perfect for water play.",
                  reviews: []
                },
                {
                  name: "Tie-Dye Cotton Shorts",
                  price: 17.50,
                  img: "https://images.unsplash.com/photo-1632053024617-d23decb44863?auto=format&fit=crop&w=400&q=80",
                  desc: "Trendy tie-dye style in breathable cotton.",
                  reviews: []
                },
                {
                  name: "Sports Mesh Shorts",
                  price: 14.75,
                  img: "https://images.unsplash.com/photo-1618354604604-5f4c2bf87ddd?auto=format&fit=crop&w=400&q=80",
                  desc: "Ventilated mesh fabric for active kids.",
                  reviews: []
                },
                {
                  name: "Light Grey Comfy Shorts",
                  price: 15.49,
                  img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f?auto=format&fit=crop&w=400&q=80",
                  desc: "Light and soft fabric for all-day comfort.",
                  reviews: []
                },
                {
                  name: "Animal Print Shorts",
                  price: 18.75,
                  img: "https://images.unsplash.com/photo-1585425902040-f0f58c79cde6?auto=format&fit=crop&w=400&q=80",
                  desc: "Fun animal faces that kids will love.",
                  reviews: []
                },
                {
                  name: "Text Graphic Shorts",
                  price: 17.25,
                  img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
                  desc: "Cool printed text with elastic waistband.",
                  reviews: []
                },
                {
                  name: "Stretch Twill Shorts",
                  price: 19.25,
                  img: "https://images.unsplash.com/photo-1589182373720-7fefb2c1f0f4?auto=format&fit=crop&w=400&q=80",
                  desc: "Durable stretch fabric for play and school.",
                  reviews: []
                }
            ],
            "Trousers": [
                {
                  name: "Classic Cotton Trousers",
                  price: 21.99,
                  img: "https://images.unsplash.com/photo-1580894908360-38d35298fba7?auto=format&fit=crop&w=400&q=80",
                  desc: "Straight-fit cotton trousers for school or casual wear.",
                  reviews: []
                },
                {
                  name: "Elastic Waist Jogger Trousers",
                  price: 19.75,
                  img: "https://images.unsplash.com/photo-1592438955713-7e1562be5af2?auto=format&fit=crop&w=400&q=80",
                  desc: "Soft and comfy with cuffed ankles and stretch waist.",
                  reviews: []
                },
                {
                  name: "Formal Black Trousers",
                  price: 24.49,
                  img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f?auto=format&fit=crop&w=400&q=80",
                  desc: "Perfect for formal events and school functions.",
                  reviews: []
                },
                {
                  name: "Camo Print Utility Trousers",
                  price: 23.25,
                  img: "https://images.unsplash.com/photo-1564468781191-6828f5bb4163?auto=format&fit=crop&w=400&q=80",
                  desc: "Trendy camo with side pockets for adventures.",
                  reviews: []
                },
                {
                  name: "Beige Slim Fit Chinos",
                  price: 22.99,
                  img: "https://images.unsplash.com/photo-1589182373720-7fefb2c1f0f4?auto=format&fit=crop&w=400&q=80",
                  desc: "Stylish chinos for dressing up or down.",
                  reviews: []
                },
                {
                  name: "Navy Blue School Trousers",
                  price: 20.49,
                  img: "https://images.unsplash.com/photo-1542060748-10c28b62716b?auto=format&fit=crop&w=400&q=80",
                  desc: "Classic navy trousers for uniform days.",
                  reviews: []
                },
                {
                  name: "Corduroy Trousers",
                  price: 25.99,
                  img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
                  desc: "Warm corduroy texture for cooler weather.",
                  reviews: []
                },
                {
                  name: "Khaki Adventure Trousers",
                  price: 23.50,
                  img: "https://images.unsplash.com/photo-1632053024617-d23decb44863?auto=format&fit=crop&w=400&q=80",
                  desc: "Durable khakis with reinforced knees.",
                  reviews: []
                },
                {
                  name: "Pull-On Fleece Trousers",
                  price: 18.99,
                  img: "https://images.unsplash.com/photo-1589571894960-20bbe2828c94?auto=format&fit=crop&w=400&q=80",
                  desc: "Warm fleece trousers for everyday comfort.",
                  reviews: []
                },
                {
                  name: "Side Stripe Sporty Trousers",
                  price: 19.99,
                  img: "https://images.unsplash.com/photo-1619626105446-d8a26056df9e?auto=format&fit=crop&w=400&q=80",
                  desc: "Track-style trousers with bold side stripes.",
                  reviews: []
                },
                {
                  name: "Green Cargo Trousers",
                  price: 24.75,
                  img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                  desc: "Multiple pockets and utility styling.",
                  reviews: []
                },
                {
                  name: "Jogger Chino Combo Trousers",
                  price: 22.49,
                  img: "https://images.unsplash.com/photo-1585425902040-f0f58c79cde6?auto=format&fit=crop&w=400&q=80",
                  desc: "Best of joggers and chinos combined!",
                  reviews: []
                },
                {
                  name: "Thermal Knit Trousers",
                  price: 26.00,
                  img: "https://images.unsplash.com/photo-1585355411125-cf66dd1d0aa7?auto=format&fit=crop&w=400&q=80",
                  desc: "Perfect for winter with thermal lining.",
                  reviews: []
                },
                {
                  name: "Grey Twill Stretch Trousers",
                  price: 21.25,
                  img: "https://images.unsplash.com/photo-1605325141153-61f88d7db07c?auto=format&fit=crop&w=400&q=80",
                  desc: "Stylish and flexible for play and school.",
                  reviews: []
                },
                {
                  name: "Patterned Lounge Trousers",
                  price: 17.49,
                  img: "https://images.unsplash.com/photo-1575311373935-1bbca1fc0f54?auto=format&fit=crop&w=400&q=80",
                  desc: "Fun prints with ultra-soft fabric for lounging.",
                  reviews: []
                }
            ],
            "Pants": [
                {
                  name: "Classic Black Formal Pants",
                  price: 22.99,
                  img: "https://images.unsplash.com/photo-1617127364692-4b64b7e20b0f?auto=format&fit=crop&w=400&q=80",
                  desc: "Smart black pants ideal for formal occasions and school events.",
                  reviews: []
                },
                {
                  name: "Elastic Waist Cotton Pants",
                  price: 18.50,
                  img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
                  desc: "Comfortable pull-on pants with adjustable waist.",
                  reviews: []
                },
                {
                  name: "Stretch Twill Pants",
                  price: 21.75,
                  img: "https://images.unsplash.com/photo-1589182373720-7fefb2c1f0f4?auto=format&fit=crop&w=400&q=80",
                  desc: "Stylish and durable twill fabric for everyday wear.",
                  reviews: []
                },
                {
                  name: "Slim Fit Chino Pants",
                  price: 20.99,
                  img: "https://images.unsplash.com/photo-1580894908360-38d35298fba7?auto=format&fit=crop&w=400&q=80",
                  desc: "Slim silhouette with a classic chino look.",
                  reviews: []
                },
                {
                  name: "Track Pants with Side Stripes",
                  price: 19.25,
                  img: "https://images.unsplash.com/photo-1592438955713-7e1562be5af2?auto=format&fit=crop&w=400&q=80",
                  desc: "Athletic design with side stripes for a sporty look.",
                  reviews: []
                },
                {
                  name: "Drawstring Jogger Pants",
                  price: 17.99,
                  img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                  desc: "Jogger style with cuffed hems and drawstring waist.",
                  reviews: []
                },
                {
                  name: "Fleece Lined Winter Pants",
                  price: 24.99,
                  img: "https://images.unsplash.com/photo-1589571894960-20bbe2828c94?auto=format&fit=crop&w=400&q=80",
                  desc: "Warm and soft inside, perfect for cold days.",
                  reviews: []
                },
                {
                  name: "Khaki Utility Pants",
                  price: 23.49,
                  img: "https://images.unsplash.com/photo-1564468781191-6828f5bb4163?auto=format&fit=crop&w=400&q=80",
                  desc: "Tough khaki material with cargo-style pockets.",
                  reviews: []
                },
                {
                  name: "Plaid Lounge Pants",
                  price: 15.75,
                  img: "https://images.unsplash.com/photo-1575311373935-1bbca1fc0f54?auto=format&fit=crop&w=400&q=80",
                  desc: "Cozy and stylish plaid perfect for relaxing at home.",
                  reviews: []
                },
                {
                  name: "School Uniform Pants",
                  price: 21.00,
                  img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f?auto=format&fit=crop&w=400&q=80",
                  desc: "Durable and wrinkle-resistant for school wear.",
                  reviews: []
                },
                {
                  name: "Cuffed Track Pants",
                  price: 18.25,
                  img: "https://images.unsplash.com/photo-1619626105446-d8a26056df9e?auto=format&fit=crop&w=400&q=80",
                  desc: "Soft knit pants with ankle cuffs and a sporty vibe.",
                  reviews: []
                },
                {
                  name: "Adventure Pants with Reinforced Knees",
                  price: 25.99,
                  img: "https://images.unsplash.com/photo-1632053024617-d23decb44863?auto=format&fit=crop&w=400&q=80",
                  desc: "Built for active kids who love the outdoors.",
                  reviews: []
                },
                {
                  name: "Basic Straight Pants",
                  price: 16.49,
                  img: "https://images.unsplash.com/photo-1585355411125-cf66dd1d0aa7?auto=format&fit=crop&w=400&q=80",
                  desc: "Simple and comfy pants for daily use.",
                  reviews: []
                },
                {
                  name: "Denim Pants with Elastic Waist",
                  price: 22.25,
                  img: "https://images.unsplash.com/photo-1542060748-10c28b62716b?auto=format&fit=crop&w=400&q=80",
                  desc: "Denim look with a comfy fit for little ones.",
                  reviews: []
                },
                {
                  name: "Printed Cartoon Pants",
                  price: 17.50,
                  img: "https://images.unsplash.com/photo-1585425902040-f0f58c79cde6?auto=format&fit=crop&w=400&q=80",
                  desc: "Fun and colorful prints that kids will love.",
                  reviews: []
                }
            ],
            "Joggers": [
                {
                  name: "Cotton Joggers with Pockets",
                  price: 18.99,
                  img: "https://images.unsplash.com/photo-1589571894960-20bbe2828c94?auto=format&fit=crop&w=400&q=80",
                  desc: "Soft joggers with side pockets and drawstring waist.",
                  reviews: []
                },
                {
                  name: "Denim Look Joggers",
                  price: 22.50,
                  img: "https://images.unsplash.com/photo-1589182373720-7fefb2c1f0f4?auto=format&fit=crop&w=400&q=80",
                  desc: "Stylish denim-look joggers with elastic cuffs.",
                  reviews: []
                },
                {
                  name: "Camo Print Joggers",
                  price: 20.25,
                  img: "https://images.unsplash.com/photo-1564468781191-6828f5bb4163?auto=format&fit=crop&w=400&q=80",
                  desc: "Cool camo pattern with stretch waistband.",
                  reviews: []
                },
                {
                  name: "Fleece Lined Winter Joggers",
                  price: 23.99,
                  img: "https://images.unsplash.com/photo-1542060748-10c28b62716b?auto=format&fit=crop&w=400&q=80",
                  desc: "Super warm joggers for winter adventures.",
                  reviews: []
                },
                {
                  name: "Cartoon Print Joggers",
                  price: 19.75,
                  img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                  desc: "Fun cartoon graphics loved by kids.",
                  reviews: []
                },
                {
                  name: "Solid Navy Joggers",
                  price: 18.25,
                  img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
                  desc: "Everyday essential joggers in solid color.",
                  reviews: []
                },
                {
                  name: "Space-Themed Joggers",
                  price: 21.49,
                  img: "https://images.unsplash.com/photo-1632053024617-d23decb44863?auto=format&fit=crop&w=400&q=80",
                  desc: "Galaxy print joggers for space explorers.",
                  reviews: []
                },
                {
                  name: "Striped Side Panel Joggers",
                  price: 20.00,
                  img: "https://images.unsplash.com/photo-1619626105446-d8a26056df9e?auto=format&fit=crop&w=400&q=80",
                  desc: "Sporty stripe design for active boys.",
                  reviews: []
                },
                {
                  name: "Joggers with Ribbed Knees",
                  price: 22.75,
                  img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f?auto=format&fit=crop&w=400&q=80",
                  desc: "Ribbed detailing at knees for extra stretch.",
                  reviews: []
                },
                {
                  name: "Jogger Chinos Hybrid",
                  price: 23.25,
                  img: "https://images.unsplash.com/photo-1585355411125-cf66dd1d0aa7?auto=format&fit=crop&w=400&q=80",
                  desc: "Combines style of chinos with comfort of joggers.",
                  reviews: []
                },
                {
                  name: "Adventure Knit Joggers",
                  price: 21.99,
                  img: "https://images.unsplash.com/photo-1605325141153-61f88d7db07c?auto=format&fit=crop&w=400&q=80",
                  desc: "Made for playtime and climbing fun!",
                  reviews: []
                },
                {
                  name: "Joggers with Side Zips",
                  price: 24.50,
                  img: "https://images.unsplash.com/photo-1618354604604-5f4c2bf87ddd?auto=format&fit=crop&w=400&q=80",
                  desc: "Stylish zippers on ankles and side pockets.",
                  reviews: []
                },
                {
                  name: "Animal Ear Joggers",
                  price: 19.49,
                  img: "https://images.unsplash.com/photo-1575311373935-1bbca1fc0f54?auto=format&fit=crop&w=400&q=80",
                  desc: "Cute animal ears on pockets – fun and unique!",
                  reviews: []
                },
                {
                  name: "Two-Tone Contrast Joggers",
                  price: 20.75,
                  img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                  desc: "Modern color-block joggers with sleek finish.",
                  reviews: []
                },
                {
                  name: "Grey Melange Joggers",
                  price: 18.99,
                  img: "https://images.unsplash.com/photo-1585425902040-f0f58c79cde6?auto=format&fit=crop&w=400&q=80",
                  desc: "Versatile soft-finish joggers for all-day use.",
                  reviews: []
                }
            ],
            "Coats": [
                {
                  name: "Classic Wool Coat",
                  price: 39.99,
                  img: "https://images.unsplash.com/photo-1593032457869-f9c9f2f19e4f?auto=format&fit=crop&w=400&q=80",
                  desc: "Warm wool-blend coat for a classy winter look.",
                  reviews: []
                },
                {
                  name: "Puffer Coat with Hood",
                  price: 44.50,
                  img: "https://images.unsplash.com/photo-1585155771261-c3b08f3f8baf?auto=format&fit=crop&w=400&q=80",
                  desc: "Quilted puffer design with detachable hood.",
                  reviews: []
                },
                {
                  name: "Waterproof Rain Coat",
                  price: 29.99,
                  img: "https://images.unsplash.com/photo-1620595293529-4ec0ec5a0c07?auto=format&fit=crop&w=400&q=80",
                  desc: "Stay dry and stylish during rainy days.",
                  reviews: []
                },
                {
                  name: "Faux Fur Trim Parka",
                  price: 48.75,
                  img: "https://images.unsplash.com/photo-1574711121886-faaad370f0d9?auto=format&fit=crop&w=400&q=80",
                  desc: "Heavy-duty coat with faux fur lining and hood.",
                  reviews: []
                },
                {
                  name: "Fleece Lined Zip Coat",
                  price: 36.99,
                  img: "https://images.unsplash.com/photo-1545243424-0ce743321e11?auto=format&fit=crop&w=400&q=80",
                  desc: "Everyday coat with soft fleece inside.",
                  reviews: []
                },
                {
                  name: "Hooded Duffle Coat",
                  price: 41.25,
                  img: "https://images.unsplash.com/photo-1542060748-10c28b62716b?auto=format&fit=crop&w=400&q=80",
                  desc: "Stylish toggles and warm fabric with hood.",
                  reviews: []
                },
                {
                  name: "Down-Filled Winter Coat",
                  price: 52.00,
                  img: "https://images.unsplash.com/photo-1547954385-9e4c4e2ba3d3?auto=format&fit=crop&w=400&q=80",
                  desc: "Super insulated down coat for extreme cold.",
                  reviews: []
                },
                {
                  name: "Colorblock Windbreaker",
                  price: 34.49,
                  img: "https://images.unsplash.com/photo-1583422409516-d76a2f9a2be2?auto=format&fit=crop&w=400&q=80",
                  desc: "Bright color panels for sporty outdoor style.",
                  reviews: []
                },
                {
                  name: "Lightweight Bomber Jacket",
                  price: 32.75,
                  img: "https://images.unsplash.com/photo-1618354691373-4347b2e7dc3e?auto=format&fit=crop&w=400&q=80",
                  desc: "Trendy bomber coat for milder weather.",
                  reviews: []
                },
                {
                  name: "Plaid Sherpa Coat",
                  price: 43.99,
                  img: "https://images.unsplash.com/photo-1580894741684-c9bba1e3c4c9?auto=format&fit=crop&w=400&q=80",
                  desc: "Plaid outer with sherpa fleece lining.",
                  reviews: []
                },
                {
                  name: "Zippered Snow Coat",
                  price: 49.25,
                  img: "https://images.unsplash.com/photo-1632053024617-d23decb44863?auto=format&fit=crop&w=400&q=80",
                  desc: "Waterproof snow coat with insulation for snow play.",
                  reviews: []
                },
                {
                  name: "Corduroy Trench Coat",
                  price: 37.99,
                  img: "https://images.unsplash.com/photo-1617127364692-4b64b7e20b0f?auto=format&fit=crop&w=400&q=80",
                  desc: "Corduroy texture for a vintage-inspired look.",
                  reviews: []
                },
                {
                  name: "Reflective Safety Coat",
                  price: 35.50,
                  img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f?auto=format&fit=crop&w=400&q=80",
                  desc: "Reflective panels for visibility and safety.",
                  reviews: []
                },
                {
                  name: "Softshell Adventure Coat",
                  price: 42.00,
                  img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
                  desc: "Flexible and weatherproof for hikes and play.",
                  reviews: []
                },
                {
                  name: "Teddy Bear Zip Coat",
                  price: 38.25,
                  img: "https://images.unsplash.com/photo-1589571894960-20bbe2828c94?auto=format&fit=crop&w=400&q=80",
                  desc: "Ultra-plush teddy-style texture in a cozy zip-up.",
                  reviews: []
                }
            ],
            "Blazers": [
                {
                  name: "Classic Navy Blazer",
                  price: 39.99,
                  img: "https://images.unsplash.com/photo-1618354691373-4347b2e7dc3e?auto=format&fit=crop&w=400&q=80",
                  desc: "Smart navy blazer for school or formal events.",
                  reviews: []
                },
                {
                  name: "Checkered Formal Blazer",
                  price: 42.50,
                  img: "https://images.unsplash.com/photo-1559563363-f343e1b2e63c?auto=format&fit=crop&w=400&q=80",
                  desc: "Elegant check pattern with two-button closure.",
                  reviews: []
                },
                {
                  name: "Slim Fit Black Blazer",
                  price: 44.99,
                  img: "https://images.unsplash.com/photo-1615315813366-f65cb8b3de6a?auto=format&fit=crop&w=400&q=80",
                  desc: "Perfect for parties and functions.",
                  reviews: []
                },
                {
                  name: "Royal Blue Party Blazer",
                  price: 38.25,
                  img: "https://images.unsplash.com/photo-1611042553480-b7d61f8e3a4e?auto=format&fit=crop&w=400&q=80",
                  desc: "Vibrant look for festive events.",
                  reviews: []
                },
                {
                  name: "Velvet Finish Blazer",
                  price: 47.00,
                  img: "https://images.unsplash.com/photo-1608229422108-bd54f346331f?auto=format&fit=crop&w=400&q=80",
                  desc: "Luxurious velvet touch with premium lining.",
                  reviews: []
                },
                {
                  name: "Beige Casual Blazer",
                  price: 36.50,
                  img: "https://images.unsplash.com/photo-1600585154340-be6161c2d0a1?auto=format&fit=crop&w=400&q=80",
                  desc: "Lightweight option for casual or semi-formal events.",
                  reviews: []
                },
                {
                  name: "Double-Breasted Blazer",
                  price: 45.75,
                  img: "https://images.unsplash.com/photo-1605640488658-60bfb8e0b8a2?auto=format&fit=crop&w=400&q=80",
                  desc: "Bold and stylish double-buttoned finish.",
                  reviews: []
                },
                {
                  name: "Grey Textured Blazer",
                  price: 40.99,
                  img: "https://images.unsplash.com/photo-1542060748-10c28b62716b?auto=format&fit=crop&w=400&q=80",
                  desc: "Smart texture adds a stylish edge.",
                  reviews: []
                },
                {
                  name: "Blazer with Pocket Square",
                  price: 43.25,
                  img: "https://images.unsplash.com/photo-1585425902040-f0f58c79cde6?auto=format&fit=crop&w=400&q=80",
                  desc: "Comes with stitched-in pocket square for flair.",
                  reviews: []
                },
                {
                  name: "Printed Wedding Blazer",
                  price: 49.99,
                  img: "https://images.unsplash.com/photo-1617127364692-4b64b7e20b0f?auto=format&fit=crop&w=400&q=80",
                  desc: "Festive print ideal for weddings or receptions.",
                  reviews: []
                }
            ],
            "Kurtas": [
                {
                  name: "White Cotton Kurta",
                  price: 15.99,
                  img: "https://images.unsplash.com/photo-1631179517734-6d15d64ea564?auto=format&fit=crop&w=400&q=80",
                  desc: "Simple and elegant white cotton kurta.",
                  reviews: []
                },
                {
                  name: "Embroidered Festive Kurta",
                  price: 19.50,
                  img: "https://images.unsplash.com/photo-1605722325073-2d0d25834b35?auto=format&fit=crop&w=400&q=80",
                  desc: "Intricate embroidery for celebrations.",
                  reviews: []
                },
                {
                  name: "Yellow Short Kurta",
                  price: 13.25,
                  img: "https://images.unsplash.com/photo-1559027615-36dcf6d4df91?auto=format&fit=crop&w=400&q=80",
                  desc: "Bright and cheerful yellow shade.",
                  reviews: []
                },
                {
                  name: "Kurta with Jacket Set",
                  price: 24.75,
                  img: "https://images.unsplash.com/photo-1580894908360-38d35298fba7?auto=format&fit=crop&w=400&q=80",
                  desc: "Comes with an elegant Nehru jacket.",
                  reviews: []
                },
                {
                  name: "Bandhani Print Kurta",
                  price: 17.99,
                  img: "https://images.unsplash.com/photo-1622520854794-fc27b4f1573e?auto=format&fit=crop&w=400&q=80",
                  desc: "Traditional Bandhani print design.",
                  reviews: []
                },
                {
                  name: "Pastel Green Kurta Pajama",
                  price: 20.00,
                  img: "https://images.unsplash.com/photo-1618850709477-e40804082a9b?auto=format&fit=crop&w=400&q=80",
                  desc: "Soothing color with matching pajama.",
                  reviews: []
                },
                {
                  name: "Golden Work Kurta Set",
                  price: 27.50,
                  img: "https://images.unsplash.com/photo-1608571424543-431508c86835?auto=format&fit=crop&w=400&q=80",
                  desc: "Golden thread work for weddings.",
                  reviews: []
                },
                {
                  name: "Casual Striped Kurta",
                  price: 14.99,
                  img: "https://images.unsplash.com/photo-1605721951370-40a7005c59b9?auto=format&fit=crop&w=400&q=80",
                  desc: "Perfect for festivals and poojas.",
                  reviews: []
                }
            ],
            "Undergarments": [
                {
                  name: "Cotton Briefs (Pack of 3)",
                  price: 8.99,
                  img: "https://images.unsplash.com/photo-1574226516831-e1dff420e10d?auto=format&fit=crop&w=400&q=80",
                  desc: "Soft breathable fabric, kid-friendly prints.",
                  reviews: []
                },
                {
                  name: "Boxer Shorts for Boys (Pack of 2)",
                  price: 9.49,
                  img: "https://images.unsplash.com/photo-1579613832125-0c7c566d25ba?auto=format&fit=crop&w=400&q=80",
                  desc: "Comfort fit boxers with elastic waist.",
                  reviews: []
                },
                {
                  name: "Printed Innerwear Set",
                  price: 10.75,
                  img: "https://images.unsplash.com/photo-1601321581723-bde958efcfc0?auto=format&fit=crop&w=400&q=80",
                  desc: "Colorful prints with snug fit.",
                  reviews: []
                },
                {
                  name: "Thermal Inner Vest",
                  price: 7.25,
                  img: "https://images.unsplash.com/photo-1558694126-7fd4d78e6ba6?auto=format&fit=crop&w=400&q=80",
                  desc: "Perfect for layering during winters.",
                  reviews: []
                },
                {
                  name: "Tank Tops (Set of 3)",
                  price: 12.50,
                  img: "https://images.unsplash.com/photo-1556909190-b307d435f7ee?auto=format&fit=crop&w=400&q=80",
                  desc: "Comfy inner tanks in neutral colors.",
                  reviews: []
                },
                {
                  name: "Sports Briefs Pack",
                  price: 10.99,
                  img: "https://images.unsplash.com/photo-1573821663915-3f83ff29544f?auto=format&fit=crop&w=400&q=80",
                  desc: "Soft elastic and stretch fabric for active kids.",
                  reviews: []
                },
                {
                  name: "Cartoon Print Underwear",
                  price: 8.75,
                  img: "https://images.unsplash.com/photo-1620595293529-4ec0ec5a0c07?auto=format&fit=crop&w=400&q=80",
                  desc: "Fun characters to keep kids excited.",
                  reviews: []
                }
            ],
            "Footwear": [
                {
                  name: "Light-Up Sneakers",
                  price: 24.99,
                  img: "https://images.unsplash.com/photo-1517260911205-8c6b8b6b7a5a?auto=format&fit=crop&w=400&q=80",
                  desc: "Flashing LED lights with breathable mesh.",
                  reviews: []
                },
                {
                  name: "Velcro Running Shoes",
                  price: 22.50,
                  img: "https://images.unsplash.com/photo-1552346154-21d32810aba1?auto=format&fit=crop&w=400&q=80",
                  desc: "Easy to wear, perfect for playtime and school.",
                  reviews: []
                },
                {
                  name: "Canvas Casual Shoes",
                  price: 20.99,
                  img: "https://images.unsplash.com/photo-1515617791141-54d1d15a1e41?auto=format&fit=crop&w=400&q=80",
                  desc: "Trendy design with comfy sole.",
                  reviews: []
                },
                {
                  name: "Slip-On Loafers",
                  price: 19.75,
                  img: "https://images.unsplash.com/photo-1610095577072-4622c20e4682?auto=format&fit=crop&w=400&q=80",
                  desc: "Formal slip-ons for school events.",
                  reviews: []
                },
                {
                  name: "Waterproof Rain Boots",
                  price: 25.00,
                  img: "https://images.unsplash.com/photo-1620595293529-4ec0ec5a0c07?auto=format&fit=crop&w=400&q=80",
                  desc: "Sturdy, colorful and fully waterproof.",
                  reviews: []
                },
                {
                  name: "Flip Flops with Cartoon Print",
                  price: 10.99,
                  img: "https://images.unsplash.com/photo-1519748771451-a94c596fad67?auto=format&fit=crop&w=400&q=80",
                  desc: "Fun, soft and durable flip flops for summer.",
                  reviews: []
                },
                {
                  name: "School Shoes (Black)",
                  price: 21.49,
                  img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                  desc: "Polishable and sturdy for daily school wear.",
                  reviews: []
                },
                {
                  name: "Sports Trainers",
                  price: 26.99,
                  img: "https://images.unsplash.com/photo-1535050579430-87a4be3d09f8?auto=format&fit=crop&w=400&q=80",
                  desc: "Non-slip soles and great ankle support.",
                  reviews: []
                },
                {
                  name: "Color Block Sneakers",
                  price: 23.49,
                  img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
                  desc: "Bright multi-color design with easy Velcro.",
                  reviews: []
                },
                {
                  name: "Glow-in-the-Dark Slippers",
                  price: 12.75,
                  img: "https://images.unsplash.com/photo-1521106550655-999f2d0653e5?auto=format&fit=crop&w=400&q=80",
                  desc: "Fun night slippers with glowing sole.",
                  reviews: []
                },
                {
                  name: "Fur Lined Winter Boots",
                  price: 29.99,
                  img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
                  desc: "Keeps tiny toes warm in snow and rain.",
                  reviews: []
                },
                {
                  name: "Sporty Sandals",
                  price: 18.25,
                  img: "https://images.unsplash.com/photo-1597586141421-e70d1c618c5c?auto=format&fit=crop&w=400&q=80",
                  desc: "Breathable and rugged for outdoor play.",
                  reviews: []
                },
                {
                  name: "Cartoon Character Sneakers",
                  price: 22.00,
                  img: "https://images.unsplash.com/photo-1605986722903-e4cb7fc7e27d?auto=format&fit=crop&w=400&q=80",
                  desc: "Kids’ favorite character prints.",
                  reviews: []
                },
                {
                  name: "Formal Derby Shoes",
                  price: 27.99,
                  img: "https://images.unsplash.com/photo-1556909190-b307d435f7ee?auto=format&fit=crop&w=400&q=80",
                  desc: "Classic design for weddings and occasions.",
                  reviews: []
                },
                {
                  name: "Mesh Running Shoes",
                  price: 21.00,
                  img: "https://images.unsplash.com/photo-1618850709477-e40804082a9b?auto=format&fit=crop&w=400&q=80",
                  desc: "Flexible and breathable for running games.",
                  reviews: []
                }
            ],
            "Accessories": [
                {
                  name: "Cartoon Character Backpack",
                  price: 18.99,
                  img: "https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=crop&w=400&q=80",
                  desc: "Spacious backpack with padded straps.",
                  reviews: []
                },
                {
                  name: "Winter Beanie Cap",
                  price: 9.25,
                  img: "https://images.unsplash.com/photo-1619626105446-d8a26056df9e?auto=format&fit=crop&w=400&q=80",
                  desc: "Knitted cap with fleece lining.",
                  reviews: []
                },
                {
                  name: "Woolen Gloves Set",
                  price: 6.50,
                  img: "https://images.unsplash.com/photo-1587351021759-3e566b8c4c7d?auto=format&fit=crop&w=400&q=80",
                  desc: "Warm gloves with soft grip.",
                  reviews: []
                },
                {
                  name: "Cartoon Sunglasses",
                  price: 7.99,
                  img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=400&q=80",
                  desc: "UV-protective and fun to wear.",
                  reviews: []
                },
                {
                  name: "Printed Face Masks (Set of 3)",
                  price: 5.99,
                  img: "https://images.unsplash.com/photo-1588776814546-8c7cdb5a3ae6?auto=format&fit=crop&w=400&q=80",
                  desc: "Soft fabric with elastic ear loops.",
                  reviews: []
                },
                {
                  name: "Digital Watch for Kids",
                  price: 14.50,
                  img: "https://images.unsplash.com/photo-1601321581723-bde958efcfc0?auto=format&fit=crop&w=400&q=80",
                  desc: "Water-resistant and child-safe materials.",
                  reviews: []
                },
                {
                  name: "Suspenders & Bow Tie Set",
                  price: 11.25,
                  img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=400&q=80",
                  desc: "Perfect for parties and functions.",
                  reviews: []
                },
                {
                  name: "Toy Wallet",
                  price: 6.75,
                  img: "https://images.unsplash.com/photo-1614043065424-2ab0f688a46c?auto=format&fit=crop&w=400&q=80",
                  desc: "Colorful wallet with cartoon print.",
                  reviews: []
                },
                {
                  name: "Smart Cap with Visor",
                  price: 8.99,
                  img: "https://images.unsplash.com/photo-1520974715892-dc6c5c0b8774?auto=format&fit=crop&w=400&q=80",
                  desc: "Trendy cap for sunny outings.",
                  reviews: []
                },
                {
                  name: "Thermal Neck Warmer",
                  price: 7.50,
                  img: "https://images.unsplash.com/photo-1605721951370-40a7005c59b9?auto=format&fit=crop&w=400&q=80",
                  desc: "Keeps neck warm during winter chills.",
                  reviews: []
                },
                {
                  name: "Sticker Badge Set",
                  price: 4.49,
                  img: "https://images.unsplash.com/photo-1580894741684-c9bba1e3c4c9?auto=format&fit=crop&w=400&q=80",
                  desc: "Fun badges for bags, caps or jackets.",
                  reviews: []
                },
                {
                  name: "Raincoat with Bag Pouch",
                  price: 17.99,
                  img: "https://images.unsplash.com/photo-1525011268546-3797d1a1e0c6?auto=format&fit=crop&w=400&q=80",
                  desc: "Packable raincoat with pouch storage.",
                  reviews: []
                },
                {
                  name: "Cartoon Print Belt",
                  price: 5.99,
                  img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=400&q=80",
                  desc: "Elastic and fun design with adjustable buckle.",
                  reviews: []
                },
                {
                  name: "Lunchbox with Insulation",
                  price: 13.99,
                  img: "https://images.unsplash.com/photo-1526470498-9ae73c665ecb?auto=format&fit=crop&w=400&q=80",
                  desc: "Keeps food warm and fresh.",
                  reviews: []
                },
                {
                  name: "Kids’ Umbrella (Animal Design)",
                  price: 10.25,
                  img: "https://images.unsplash.com/photo-1559563363-f343e1b2e63c?auto=format&fit=crop&w=400&q=80",
                  desc: "Colorful and safe-for-children umbrella.",
                  reviews: []
                }
            ],       
          },
          "girl"={
            "TShirts": [
                {
                  name: "Unicorn Graphic Tee",
                  price: 14.99,
                  img: "https://images.unsplash.com/photo-1610095577072-4622c20e4682?auto=format&fit=crop&w=400&q=80",
                  desc: "Soft cotton tee with magical unicorn print.",
                  reviews: []
                },
                {
                  name: "Rainbow Striped T-Shirt",
                  price: 13.50,
                  img: "https://images.unsplash.com/photo-1593032457869-f9c9f2f19e4f?auto=format&fit=crop&w=400&q=80",
                  desc: "Vibrant stripes and short sleeves.",
                  reviews: []
                },
                {
                  name: "Mermaid Print Tee",
                  price: 12.75,
                  img: "https://images.unsplash.com/photo-1575311373935-1bbca1fc0f54?auto=format&fit=crop&w=400&q=80",
                  desc: "Glittery mermaid scales and soft fit.",
                  reviews: []
                },
                {
                  name: "Floral Tie Knot Tee",
                  price: 15.25,
                  img: "https://images.unsplash.com/photo-1619626105446-d8a26056df9e?auto=format&fit=crop&w=400&q=80",
                  desc: "Trendy tie-front design with flower print.",
                  reviews: []
                },
                {
                  name: "Princess Crown Tee",
                  price: 13.99,
                  img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                  desc: "Sparkly crown print with puff sleeves.",
                  reviews: []
                },
                {
                  name: "Ballet Dancer T-Shirt",
                  price: 12.25,
                  img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=400&q=80",
                  desc: "Perfect for dance-loving girls.",
                  reviews: []
                },
                {
                  name: "Positive Quote Tee",
                  price: 14.50,
                  img: "https://images.unsplash.com/photo-1605986722903-e4cb7fc7e27d?auto=format&fit=crop&w=400&q=80",
                  desc: "Uplifting messages in pastel tones.",
                  reviews: []
                },
                {
                  name: "Cat Face T-Shirt",
                  price: 13.25,
                  img: "https://images.unsplash.com/photo-1520974715892-dc6c5c0b8774?auto=format&fit=crop&w=400&q=80",
                  desc: "Whiskers, ears, and total cuteness.",
                  reviews: []
                },
                {
                  name: "Colorblock Tee",
                  price: 13.75,
                  img: "https://images.unsplash.com/photo-1519748771451-a94c596fad67?auto=format&fit=crop&w=400&q=80",
                  desc: "Stylish dual-tone cotton shirt.",
                  reviews: []
                },
                {
                  name: "Frozen Inspired Tee",
                  price: 15.00,
                  img: "https://images.unsplash.com/photo-1618850709477-e40804082a9b?auto=format&fit=crop&w=400&q=80",
                  desc: "Let it go in style with Elsa and Anna.",
                  reviews: []
                },
                {
                  name: "Graphic Animal Print Tee",
                  price: 12.99,
                  img: "https://images.unsplash.com/photo-1601321581723-bde958efcfc0?auto=format&fit=crop&w=400&q=80",
                  desc: "Leopard, panda, or bunny friends.",
                  reviews: []
                },
                {
                  name: "Butterfly Embroidery Tee",
                  price: 14.75,
                  img: "https://images.unsplash.com/photo-1574226516831-e1dff420e10d?auto=format&fit=crop&w=400&q=80",
                  desc: "Delicate embroidered butterflies.",
                  reviews: []
                },
                {
                  name: "Glitter Heart T-Shirt",
                  price: 13.89,
                  img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=400&q=80",
                  desc: "Shiny glitter heart with flutter sleeves.",
                  reviews: []
                },
                {
                  name: "Pastel Ombre Tee",
                  price: 14.25,
                  img: "https://images.unsplash.com/photo-1601321581723-bde958efcfc0?auto=format&fit=crop&w=400&q=80",
                  desc: "Soft ombre tones and breathable fabric.",
                  reviews: []
                },
                {
                  name: "Super Girl T-Shirt",
                  price: 15.49,
                  img: "https://images.unsplash.com/photo-1589571894960-20bbe2828c94?auto=format&fit=crop&w=400&q=80",
                  desc: "For little heroes in training.",
                  reviews: []
                }
            ],
            "Shirts": [
                {
                  name: "Denim Button-Up Shirt",
                  price: 18.99,
                  img: "https://images.unsplash.com/photo-1610095577072-4622c20e4682?auto=format&fit=crop&w=400&q=80",
                  desc: "Casual denim with roll-up sleeves.",
                  reviews: []
                },
                {
                  name: "Checkered School Shirt",
                  price: 17.50,
                  img: "https://images.unsplash.com/photo-1585425902040-f0f58c79cde6?auto=format&fit=crop&w=400&q=80",
                  desc: "Neat plaid print with collar.",
                  reviews: []
                },
                {
                  name: "Polka Dot Shirt",
                  price: 16.25,
                  img: "https://images.unsplash.com/photo-1611042553480-b7d61f8e3a4e?auto=format&fit=crop&w=400&q=80",
                  desc: "Playful polka dots in pastel shades.",
                  reviews: []
                },
                {
                  name: "Peplum Collar Shirt",
                  price: 19.00,
                  img: "https://images.unsplash.com/photo-1593032457869-f9c9f2f19e4f?auto=format&fit=crop&w=400&q=80",
                  desc: "Trendy peplum with bow detail.",
                  reviews: []
                },
                {
                  name: "Ruffled Cotton Shirt",
                  price: 18.75,
                  img: "https://images.unsplash.com/photo-1589182373720-7fefb2c1f0f4?auto=format&fit=crop&w=400&q=80",
                  desc: "Light ruffles at sleeves and hem.",
                  reviews: []
                },
                {
                  name: "Floral Embroidered Shirt",
                  price: 20.00,
                  img: "https://images.unsplash.com/photo-1547954385-9e4c4e2ba3d3?auto=format&fit=crop&w=400&q=80",
                  desc: "Detailed embroidery with elegance.",
                  reviews: []
                },
                {
                  name: "White Lace Shirt",
                  price: 21.25,
                  img: "https://images.unsplash.com/photo-1579613832125-0c7c566d25ba?auto=format&fit=crop&w=400&q=80",
                  desc: "Lace front panel for occasions.",
                  reviews: []
                },
                {
                  name: "Tie & Dye Shirt",
                  price: 16.99,
                  img: "https://images.unsplash.com/photo-1617127364692-4b64b7e20b0f?auto=format&fit=crop&w=400&q=80",
                  desc: "Trendy design with soft fabric.",
                  reviews: []
                },
                {
                  name: "Tunic Shirt with Tassels",
                  price: 17.75,
                  img: "https://images.unsplash.com/photo-1526470498-9ae73c665ecb?auto=format&fit=crop&w=400&q=80",
                  desc: "Ethnic tunic shirt with tassel tie.",
                  reviews: []
                },
                {
                  name: "Striped Cotton Shirt",
                  price: 15.49,
                  img: "https://images.unsplash.com/photo-1542060748-10c28b62716b?auto=format&fit=crop&w=400&q=80",
                  desc: "Classic stripe design for daily wear.",
                  reviews: []
                }
            ],
            "Hoodies": [
                {
                  name: "Unicorn Ears Hoodie",
                  price: 24.99,
                  img: "https://images.unsplash.com/photo-1618354691373-4347b2e7dc3e?auto=format&fit=crop&w=400&q=80",
                  desc: "With 3D unicorn horn and ears.",
                  reviews: []
                },
                {
                  name: "Fleece Lined Zip Hoodie",
                  price: 22.50,
                  img: "https://images.unsplash.com/photo-1545243424-0ce743321e11?auto=format&fit=crop&w=400&q=80",
                  desc: "Ultra-soft lining and zip front.",
                  reviews: []
                },
                {
                  name: "Dinosaur Hoodie",
                  price: 23.25,
                  img: "https://images.unsplash.com/photo-1574711121886-faaad370f0d9?auto=format&fit=crop&w=400&q=80",
                  desc: "Fun spikes on hood and back.",
                  reviews: []
                },
                {
                  name: "Pastel Colorblock Hoodie",
                  price: 21.99,
                  img: "https://images.unsplash.com/photo-1587351021759-3e566b8c4c7d?auto=format&fit=crop&w=400&q=80",
                  desc: "Modern design with comfy feel.",
                  reviews: []
                },
                {
                  name: "Cat Ears Hoodie",
                  price: 24.00,
                  img: "https://images.unsplash.com/photo-1574226516831-e1dff420e10d?auto=format&fit=crop&w=400&q=80",
                  desc: "Cute feline design with 3D ears.",
                  reviews: []
                },
                {
                  name: "Hoodie with Front Pocket",
                  price: 20.49,
                  img: "https://images.unsplash.com/photo-1542060748-10c28b62716b?auto=format&fit=crop&w=400&q=80",
                  desc: "Classic hoodie style with kangaroo pocket.",
                  reviews: []
                },
                {
                  name: "Glitter Zip-Up Hoodie",
                  price: 25.75,
                  img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f?auto=format&fit=crop&w=400&q=80",
                  desc: "Sparkly and fun outerwear piece.",
                  reviews: []
                },
                {
                  name: "Printed Hoodie Dress",
                  price: 27.00,
                  img: "https://images.unsplash.com/photo-1542060748-10c28b62716b?auto=format&fit=crop&w=400&q=80",
                  desc: "Wear as a long hoodie or dress.",
                  reviews: []
                },
                {
                  name: "Starry Sky Hoodie",
                  price: 22.99,
                  img: "https://images.unsplash.com/photo-1583422409516-d76a2f9a2be2?auto=format&fit=crop&w=400&q=80",
                  desc: "Star print with glow-in-the-dark ink.",
                  reviews: []
                },
                {
                  name: "Winter Plush Hoodie",
                  price: 26.50,
                  img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
                  desc: "Plush outer layer for chilly days.",
                  reviews: []
                }
            ],
            "Sweaters": [
                {
                  name: "Cable Knit Sweater",
                  price: 18.99,
                  img: "https://images.unsplash.com/photo-1573821663915-3f83ff29544f?auto=format&fit=crop&w=400&q=80",
                  desc: "Warm and cozy traditional knit.",
                  reviews: []
                },
                {
                  name: "Pom-Pom Sweater",
                  price: 20.25,
                  img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c?auto=format&fit=crop&w=400&q=80",
                  desc: "Adorable pom-poms across the chest.",
                  reviews: []
                },
                {
                  name: "Rainbow Knit Sweater",
                  price: 19.50,
                  img: "https://images.unsplash.com/photo-1601321581723-bde958efcfc0?auto=format&fit=crop&w=400&q=80",
                  desc: "Colorful stripes in soft yarn.",
                  reviews: []
                },
                {
                  name: "Teddy Bear Sweater",
                  price: 21.00,
                  img: "https://images.unsplash.com/photo-1605986722903-e4cb7fc7e27d?auto=format&fit=crop&w=400&q=80",
                  desc: "Teddy bear face with ears stitched on.",
                  reviews: []
                },
                {
                  name: "Ruffled Sleeve Sweater",
                  price: 18.75,
                  img: "https://images.unsplash.com/photo-1579613832125-0c7c566d25ba?auto=format&fit=crop&w=400&q=80",
                  desc: "Frill details on sleeves for style.",
                  reviews: []
                },
                {
                  name: "Fair Isle Knit",
                  price: 22.99,
                  img: "https://images.unsplash.com/photo-1547954385-9e4c4e2ba3d3?auto=format&fit=crop&w=400&q=80",
                  desc: "Classic winter knit pattern.",
                  reviews: []
                },
                {
                  name: "Peplum Sweater",
                  price: 20.75,
                  img: "https://images.unsplash.com/photo-1580894741684-c9bba1e3c4c9?auto=format&fit=crop&w=400&q=80",
                  desc: "Girly flared hem detail.",
                  reviews: []
                },
                {
                  name: "Heart Knit Sweater",
                  price: 19.99,
                  img: "https://images.unsplash.com/photo-1585155771261-c3b08f3f8baf?auto=format&fit=crop&w=400&q=80",
                  desc: "Knitted heart pattern with warm feel.",
                  reviews: []
                },
                {
                  name: "Bow Detail Sweater",
                  price: 21.25,
                  img: "https://images.unsplash.com/photo-1542060748-10c28b62716b?auto=format&fit=crop&w=400&q=80",
                  desc: "Cute bow detail on back.",
                  reviews: []
                },
                {
                  name: "Fuzzy Popcorn Knit",
                  price: 22.25,
                  img: "https://images.unsplash.com/photo-1605640488658-60bfb8e0b8a2?auto=format&fit=crop&w=400&q=80",
                  desc: "Ultra fluffy and cozy for winter.",
                  reviews: []
                }
            ],
            "Sweatshirts": [
                { name: "Unicorn Print Sweatshirt", price: 19.99, img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c", desc: "Fleece sweatshirt with unicorn graphic.", reviews: [] },
                { name: "Floral Embroidered Sweatshirt", price: 21.50, img: "https://images.unsplash.com/photo-1580894741684-c9bba1e3c4c9", desc: "Elegant floral embroidery for casual days.", reviews: [] },
                { name: "Rainbow Zip-Up Sweatshirt", price: 22.75, img: "https://images.unsplash.com/photo-1601321581723-bde958efcfc0", desc: "Bright and colorful with side pockets.", reviews: [] },
                { name: "Star Patch Sweatshirt", price: 20.00, img: "https://images.unsplash.com/photo-1605986722903-e4cb7fc7e27d", desc: "Sparkling star patch design.", reviews: [] },
                { name: "Cartoon Bunny Sweatshirt", price: 18.99, img: "https://images.unsplash.com/photo-1587351021759-3e566b8c4c7d", desc: "Cute bunny print with warm lining.", reviews: [] }
        ],
              
            "Frocks": [
                { name: "Floral Cotton Frock", price: 17.99, img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca", desc: "Printed cotton frock for summer.", reviews: [] },
                { name: "Ruffled Sleeve Party Frock", price: 23.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308", desc: "Party-perfect with satin bow.", reviews: [] },
                { name: "Lace Princess Frock", price: 25.49, img: "https://images.unsplash.com/photo-1619626105446-d8a26056df9e", desc: "Elegant lace and full flared skirt.", reviews: [] },
                { name: "Ombre Layered Frock", price: 21.00, img: "https://images.unsplash.com/photo-1610095577072-4622c20e4682", desc: "Soft ombre tones with layers.", reviews: [] },
                { name: "Denim Pocket Frock", price: 19.75, img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a", desc: "Trendy and casual denim.", reviews: [] }
            ],
              
            "Jeans": [
                { name: "Skinny Fit Jeans", price: 18.50, img: "https://images.unsplash.com/photo-1542060748-10c28b62716b", desc: "Stretchable and stylish.", reviews: [] },
                { name: "Embroidered Jeans", price: 20.99, img: "https://images.unsplash.com/photo-1618850709477-e40804082a9b", desc: "Floral embroidery on knees.", reviews: [] },
                { name: "Ripped Blue Jeans", price: 21.49, img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c", desc: "Trendy distressed look.", reviews: [] },
                { name: "Heart Patch Jeans", price: 22.25, img: "https://images.unsplash.com/photo-1520974715892-dc6c5c0b8774", desc: "Cute patch details on front.", reviews: [] },
                { name: "Bootcut Jeans", price: 20.00, img: "https://images.unsplash.com/photo-1587351021759-3e566b8c4c7d", desc: "Classic cut for casual days.", reviews: [] }
            ],
              
            "Shorts": [
                { name: "Denim Shorts", price: 15.99, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c", desc: "Classic denim cut-off style.", reviews: [] },
                { name: "Floral Cotton Shorts", price: 14.50, img: "https://images.unsplash.com/photo-1593032457869-f9c9f2f19e4f", desc: "Soft, breathable floral design.", reviews: [] },
                { name: "Frilly Edge Shorts", price: 16.25, img: "https://images.unsplash.com/photo-1579613832125-0c7c566d25ba", desc: "Girly frills and pastel hues.", reviews: [] },
                { name: "Sporty Mesh Shorts", price: 13.99, img: "https://images.unsplash.com/photo-1580894741684-c9bba1e3c4c9", desc: "Ideal for play and comfort.", reviews: [] },
                { name: "Bow Tie Waist Shorts", price: 15.75, img: "https://images.unsplash.com/photo-1542060748-10c28b62716b", desc: "Chic waist-tie design.", reviews: [] }
            ],
              
            "Trousers": [
                { name: "Checked Cotton Trousers", price: 17.25, img: "https://images.unsplash.com/photo-1611042553480-b7d61f8e3a4e", desc: "Smart checks and light fabric.", reviews: [] },
                { name: "Casual Jogger Trousers", price: 18.99, img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f", desc: "Comfy fit with pockets.", reviews: [] },
                { name: "Formal Black Trousers", price: 20.50, img: "https://images.unsplash.com/photo-1583422409516-d76a2f9a2be2", desc: "Elegant and school-ready.", reviews: [] },
                { name: "Printed Leg Trousers", price: 16.75, img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c", desc: "Fun print with soft texture.", reviews: [] },
                { name: "Tie-Waist Cotton Trousers", price: 19.00, img: "https://images.unsplash.com/photo-1526470498-9ae73c665ecb", desc: "Flexible waistband for comfort.", reviews: [] }
            ],
              
            "Leggings": [
                { name: "Floral Print Leggings", price: 13.50, img: "https://images.unsplash.com/photo-1601321581723-bde958efcfc0", desc: "Bright floral stretch leggings.", reviews: [] },
                { name: "Solid Color Leggings (Set of 2)", price: 19.99, img: "https://images.unsplash.com/photo-1605640488658-60bfb8e0b8a2", desc: "Everyday essentials in cotton.", reviews: [] },
                { name: "Heart Print Leggings", price: 14.25, img: "https://images.unsplash.com/photo-1605986722903-e4cb7fc7e27d", desc: "Cute heart pattern all-over.", reviews: [] },
                { name: "Stretchy Jeggings", price: 17.75, img: "https://images.unsplash.com/photo-1618850709477-e40804082a9b", desc: "Jeans-look leggings.", reviews: [] },
                { name: "Cartoon Character Leggings", price: 15.00, img: "https://images.unsplash.com/photo-1547954385-9e4c4e2ba3d3", desc: "Fun and playful characters.", reviews: [] }
            ],
              
            "Joggers": [
                { name: "Cotton Joggers with Pockets", price: 17.50, img: "https://images.unsplash.com/photo-1587351021759-3e566b8c4c7d", desc: "Loose fit with comfy drawstring.", reviews: [] },
                { name: "Printed Joggers", price: 18.75, img: "https://images.unsplash.com/photo-1601321581723-bde958efcfc0", desc: "Playful design, perfect for play.", reviews: [] },
                { name: "Glitter Joggers", price: 20.99, img: "https://images.unsplash.com/photo-1583422409516-d76a2f9a2be2", desc: "Sparkle thread detail.", reviews: [] },
                { name: "Joggers with Stripes", price: 16.25, img: "https://images.unsplash.com/photo-1526470498-9ae73c665ecb", desc: "Side stripe sporty look.", reviews: [] },
                { name: "Pastel Soft Joggers", price: 19.50, img: "https://images.unsplash.com/photo-1579613832125-0c7c566d25ba", desc: "Super soft and breathable.", reviews: [] }
            ],
            "Kurtis": [
                { name: "Floral Printed Kurti", price: 18.99, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", desc: "Soft rayon with traditional design.", reviews: [] },
                { name: "Anarkali Style Kurti", price: 21.50, img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f", desc: "Elegant and flowy fit.", reviews: [] },
                { name: "Cotton A-Line Kurti", price: 17.99, img: "https://images.unsplash.com/photo-1609607286936-b5fd1cf66c14", desc: "Everyday comfort wear.", reviews: [] },
                { name: "Printed Flared Kurti", price: 20.49, img: "https://images.unsplash.com/photo-1620641788420-007b3c90571c", desc: "Colorful and breezy.", reviews: [] },
                { name: "Kurti with Jacket", price: 24.99, img: "https://images.unsplash.com/photo-1593032305776-b82b1bc7a8a4", desc: "Trendy layered look.", reviews: [] }
            ],
            "Dresses": [
                { name: "Sequined Party Dress", price: 25.99, img: "https://images.unsplash.com/photo-1547954385-9e4c4e2ba3d3", desc: "Shimmering look for parties.", reviews: [] },
                { name: "Sleeveless Summer Dress", price: 16.75, img: "https://images.unsplash.com/photo-1575311373935-1bbca1fc0f54", desc: "Lightweight and airy.", reviews: [] },
                { name: "Tulle Princess Dress", price: 28.00, img: "https://images.unsplash.com/photo-1610095577072-4622c20e4682", desc: "Puffy and cute.", reviews: [] },
                { name: "Polka Dot Dress", price: 18.99, img: "https://images.unsplash.com/photo-1622448052746-f5a1b73e275e", desc: "Retro vibes with modern fit.", reviews: [] }
            ],
            "Undergarments": [
                { name: "Cotton Briefs (Pack of 5)", price: 14.99, img: "https://images.unsplash.com/photo-1580894741684-c9bba1e3c4c9", desc: "Comfortable and skin-friendly.", reviews: [] },
                { name: "Training Bras (Pack of 3)", price: 19.99, img: "https://images.unsplash.com/photo-1601321581723-bde958efcfc0", desc: "Soft support for growing girls.", reviews: [] },
                { name: "Printed Panty Set", price: 12.99, img: "https://images.unsplash.com/photo-1607042297395-407b05d18e2e", desc: "Fun prints, elastic waistband.", reviews: [] },
                { name: "Camisole Tops (Pack of 3)", price: 16.50, img: "https://images.unsplash.com/photo-1609607286936-b5fd1cf66c14", desc: "Soft layering piece.", reviews: [] }
            ],
            "Footwear": [
                { name: "Glitter Ballet Flats", price: 22.99, img: "https://images.unsplash.com/photo-1517260911205-8c6b8b6b7a5a", desc: "Perfect for dressy occasions.", reviews: [] },
                { name: "LED Light Sneakers", price: 25.99, img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308", desc: "Fun lighting with every step.", reviews: [] },
                { name: "Slip-On Canvas Shoes", price: 18.49, img: "https://images.unsplash.com/photo-1611042553480-b7d61f8e3a4e", desc: "Easy wear and stylish.", reviews: [] },
                { name: "Cute Printed Sandals", price: 16.00, img: "https://images.unsplash.com/photo-1580894741684-c9bba1e3c4c9", desc: "Comfy straps and pretty print.", reviews: [] }
            ],
            "cAccessories": [
                { name: "Hair Clip Set", price: 8.99, img: "https://images.unsplash.com/photo-1579613832125-0c7c566d25ba", desc: "Colorful hair clips and pins.", reviews: [] },
                { name: "Mini Backpack", price: 17.49, img: "https://images.unsplash.com/photo-1610095577072-4622c20e4682", desc: "Stylish and light for kids.", reviews: [] },
                { name: "Printed Headbands (Set of 3)", price: 10.50, img: "https://images.unsplash.com/photo-1622448052746-f5a1b73e275e", desc: "Soft and stretchable.", reviews: [] },
                { name: "Cartoon-Themed Watch", price: 14.99, img: "https://images.unsplash.com/photo-1545231027-637d2fefb94c", desc: "Fun way to learn time.", reviews: [] }
            ],

          },
    ],
    
    skincare: [
        "Men": [
            { name: "Men's Charcoal Face Wash", price: 12.99, img: "https://images.unsplash.com/photo-1592906200380-80f2064e77dd", desc: "Deep cleanses with activated charcoal.", reviews: [] },
            { name: "Men's Oil Control Moisturizer", price: 14.50, img: "https://images.unsplash.com/photo-1610465297117-0cc3f49cd3a9", desc: "Controls oil and hydrates.", reviews: [] },
            { name: "Men's Anti-Acne Cream", price: 16.99, img: "https://images.unsplash.com/photo-1589987601366-bf0ef438b5fe", desc: "Reduces pimples and scars.", reviews: [] },
            { name: "Men's Beard and Skin Oil", price: 13.75, img: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143", desc: "Nourishes skin and beard.", reviews: [] },
            { name: "Men's Daily Sunscreen SPF 50", price: 17.99, img: "https://images.unsplash.com/photo-1588776814546-ec7b323fa41b", desc: "Protects from sun damage.", reviews: [] },
            { name: "Men's Eye Cream", price: 15.25, img: "https://images.unsplash.com/photo-1631100443813-5ad93a69f8cf", desc: "Reduces dark circles and puffiness.", reviews: [] },
            { name: "Men's Skin Brightening Serum", price: 18.50, img: "https://images.unsplash.com/photo-1613145993487-b891fae0fb9e", desc: "Improves skin tone and glow.", reviews: [] },
            { name: "Men's Hydrating Face Gel", price: 13.99, img: "https://images.unsplash.com/photo-1556228720-1936a6d68a6b", desc: "Soothes and cools skin.", reviews: [] },
            { name: "Men's Exfoliating Scrub", price: 14.75, img: "https://images.unsplash.com/photo-1562572154-3b528c5f9a98", desc: "Removes dead skin and blackheads.", reviews: [] },
            { name: "Men's Skin Repair Night Cream", price: 19.99, img: "https://images.unsplash.com/photo-1613145993487-b891fae0fb9e", desc: "Revitalizes skin overnight.", reviews: [] },
            { name: "Men's Anti-Aging Cream", price: 21.50, img: "https://images.unsplash.com/photo-1622448052746-f5a1b73e275e", desc: "Reduces fine lines and wrinkles.", reviews: [] },
            { name: "Men's Face Toner", price: 11.99, img: "https://images.unsplash.com/photo-1611627858186-9a8b2e0a90d3", desc: "Balances pH and shrinks pores.", reviews: [] },
            { name: "Men's Clay Mask", price: 16.50, img: "https://images.unsplash.com/photo-1609989309219-6813aa9a4f55", desc: "Detoxifies and clears skin.", reviews: [] },
            { name: "Men's Vitamin C Serum", price: 22.99, img: "https://images.unsplash.com/photo-1622202170025-2857af3c0043", desc: "Brightens and firms skin.", reviews: [] },
            { name: "Men's After Shave Balm", price: 10.50, img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f", desc: "Soothes irritation after shaving.", reviews: [] }
        ],
          
        "Women": [
            { name: "Gentle Foaming Face Wash", price: 11.99, img: "https://images.unsplash.com/photo-1570158268183-d296b2892211", desc: "Cleanses without stripping moisture.", reviews: [] },
            { name: "Hydrating Toner", price: 13.50, img: "https://images.unsplash.com/photo-1585914927957-2be7b963c393", desc: "Prepares skin for hydration.", reviews: [] },
            { name: "Vitamin C Serum", price: 21.75, img: "https://images.unsplash.com/photo-1600180758890-6a259c29fbb3", desc: "Fades dark spots and boosts glow.", reviews: [] },
            { name: "Night Repair Cream", price: 24.99, img: "https://images.unsplash.com/photo-1613145993487-b891fae0fb9e", desc: "Rejuvenates skin overnight.", reviews: [] },
            { name: "SPF 50 Sunscreen", price: 18.49, img: "https://images.unsplash.com/photo-1610465297117-0cc3f49cd3a9", desc: "Protects from harmful UV rays.", reviews: [] },
            { name: "Exfoliating Face Scrub", price: 14.25, img: "https://images.unsplash.com/photo-1622202170025-2857af3c0043", desc: "Smoothens and refreshes.", reviews: [] },
            { name: "Aloe Vera Gel", price: 10.99, img: "https://images.unsplash.com/photo-1602751581033-0e5c5a486872", desc: "Soothes irritated skin.", reviews: [] },
            { name: "Skin Brightening Face Pack", price: 15.75, img: "https://images.unsplash.com/photo-1592906200380-80f2064e77dd", desc: "Natural glow and fairness.", reviews: [] },
            { name: "Lip Balm (Pack of 2)", price: 6.99, img: "https://images.unsplash.com/photo-1588776814546-ec7b323fa41b", desc: "Keeps lips soft and moisturized.", reviews: [] },
            { name: "Rose Water Mist", price: 9.49, img: "https://images.unsplash.com/photo-1556228720-1936a6d68a6b", desc: "Refreshing facial spray.", reviews: [] },
            { name: "Under Eye Gel", price: 12.99, img: "https://images.unsplash.com/photo-1631100443813-5ad93a69f8cf", desc: "Reduces puffiness and dark circles.", reviews: [] },
            { name: "Pore Minimizer Serum", price: 19.50, img: "https://images.unsplash.com/photo-1601321581723-bde958efcfc0", desc: "Smooth and refined look.", reviews: [] },
            { name: "Collagen Booster Serum", price: 23.50, img: "https://images.unsplash.com/photo-1589987601366-bf0ef438b5fe", desc: "Firms and tightens skin.", reviews: [] },
            { name: "Face Massage Cream", price: 15.25, img: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143", desc: "Boosts circulation and glow.", reviews: [] },
            { name: "Tea Tree Blemish Gel", price: 13.00, img: "https://images.unsplash.com/photo-1600180758890-6a259c29fbb3", desc: "Targets acne and breakouts.", reviews: [] }
        ],
          
        "Unisex": [
            { name: "Aloe Vera Moisturizing Gel", price: 10.99, img: "https://images.unsplash.com/photo-1602751581033-0e5c5a486872", desc: "Hydrating and soothing gel.", reviews: [] },
            { name: "Vitamin C Glow Serum", price: 19.75, img: "https://images.unsplash.com/photo-1622202170025-2857af3c0043", desc: "Brightens dull skin.", reviews: [] },
            { name: "SPF 50+ Broad Spectrum Sunscreen", price: 17.25, img: "https://images.unsplash.com/photo-1588776814546-ec7b323fa41b", desc: "Strong UV protection.", reviews: [] },
            { name: "Hyaluronic Acid Face Serum", price: 22.00, img: "https://images.unsplash.com/photo-1601321581723-bde958efcfc0", desc: "Deep hydration boost.", reviews: [] },
            { name: "Gentle Exfoliating Scrub", price: 13.99, img: "https://images.unsplash.com/photo-1562572154-3b528c5f9a98", desc: "Removes impurities.", reviews: [] },
            { name: "Face Mist with Rose Extracts", price: 11.50, img: "https://images.unsplash.com/photo-1556228720-1936a6d68a6b", desc: "Keeps skin fresh.", reviews: [] },
            { name: "Activated Charcoal Face Mask", price: 15.75, img: "https://images.unsplash.com/photo-1613145993487-b891fae0fb9e", desc: "Detoxifies and cleans pores.", reviews: [] },
            { name: "Soothing After Sun Gel", price: 12.25, img: "https://images.unsplash.com/photo-1585914927957-2be7b963c393", desc: "Cools sun-exposed skin.", reviews: [] },
            { name: "Anti-Pollution Face Wash", price: 14.49, img: "https://images.unsplash.com/photo-1609989309219-6813aa9a4f55", desc: "Protects against city grime.", reviews: [] },
            { name: "Daily Use Hydrating Cream", price: 16.50, img: "https://images.unsplash.com/photo-1570158268183-d296b2892211", desc: "Keeps skin moisturized all day.", reviews: [] },
            { name: "Under Eye Roll-On", price: 13.25, img: "https://images.unsplash.com/photo-1631100443813-5ad93a69f8cf", desc: "Refreshes tired eyes.", reviews: [] },
            { name: "Neem & Tea Tree Face Wash", price: 11.75, img: "https://images.unsplash.com/photo-1602810318383-04222ed7d46f", desc: "Fights acne and bacteria.", reviews: [] },
            { name: "Face Oil with Jojoba & Argan", price: 20.00, img: "https://images.unsplash.com/photo-1589987601366-bf0ef438b5fe", desc: "Nourishes deeply.", reviews: [] },
            { name: "Anti-Aging Serum", price: 23.99, img: "https://images.unsplash.com/photo-1600180758890-6a259c29fbb3", desc: "Smoothens wrinkles.", reviews: [] },
            { name: "All-in-One Toner", price: 12.49, img: "https://images.unsplash.com/photo-1570158268183-d296b2892211", desc: "Tones and balances skin.", reviews: [] }
        ],
          
    ],
    electronics: [
        "laptops": [
            { name: "Dell XPS 13", price: 999.99, img: "https://example.com/xps13.jpg", desc: "Compact and powerful ultrabook.", reviews: [] },
            { name: "MacBook Air M2", price: 1199.00, img: "https://example.com/macbookair.jpg", desc: "Sleek Apple performance.", reviews: [] },
            { name: "HP Pavilion 15", price: 749.50, img: "https://example.com/hppavilion.jpg", desc: "Reliable everyday laptop.", reviews: [] },
            { name: "Lenovo IdeaPad Slim 5", price: 659.99, img: "https://example.com/ideapad.jpg", desc: "Balanced specs and portability.", reviews: [] },
            { name: "ASUS ROG Zephyrus G14", price: 1499.99, img: "https://example.com/zephyrus.jpg", desc: "Gaming powerhouse in a slim body.", reviews: [] },
            { name: "Acer Aspire 7", price: 899.99, img: "https://example.com/aspire7.jpg", desc: "Performance laptop for students.", reviews: [] },
            { name: "Microsoft Surface Laptop 5", price: 1099.00, img: "https://example.com/surface5.jpg", desc: "Premium design with Windows 11.", reviews: [] },
            { name: "Samsung Galaxy Book3", price: 949.99, img: "https://example.com/galaxybook.jpg", desc: "Samsung’s Windows experience.", reviews: [] },
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
            { name: "Apple Magic Mouse 2", price: 79.00, img: "https://example.com/magicmouse.jpg", desc: "Apple’s multi-touch mouse.", reviews: [] },
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
      
        streamingDevices [
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
    ],
    homeappliances:[
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
      
        fans [
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
    ],
    homeDecor: [
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
    fitness: [
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
    tools: [
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
    }
};

// Cart logic
let "cart": [];

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
    container.innerHTML = products[category].map((product, idx) => `
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
    let "all": [];
    Object.keys(products).forEach(category => {
        products[category].forEach((product, idx) => {
            all.push({ ...product, category, idx });
        });
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
  const names = subcategoryMap[mainCategory]?.[subcategory] || [];
  const container = document.getElementById(`${mainCategory}-products`);
  if (container && products[mainCategory]) {
    const filtered = products[mainCategory].filter(p => names.includes(p.name));
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
            const cat = btn.getAttribute('data-category');
            if (categoryImports[cat]) {
                await renderCategoryProducts(cat);
            } else {
                renderProducts(cat, `${cat}-products`);
            }
            showSection(cat);
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
            "cart": [];
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
            const "allProducts": [
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