import Product from '../models/productsModel.js';
import cloudinary from 'cloudinary';
import fs from 'fs/promises';
import Shop from '../models/shopModel.js'


//method :get
//route :/dashboard/getshoproducts
//auth :required
export const getShopProducts = async (req, res) => {
    try {
        const user = req.user
        const userproducts = await Product.find({ user })
        const shop = await Shop.findOne({user})
        res.status(200).json({
            userproducts,
            shop
        })
    } catch (error) {
        res.status(500).json('error')
    }
}


//method :post 
//route :/dashboard/createshoproduct
//data :user,title,description,price,productImage
//auth :required
export const createShopProducts = async (req, res) => {
    try {
        const user = req.user
        const { title, description, price } = req.body
        let productImage = {}
        if (!title || !description || !price || !req.file) {
            return res.status(500).json('Please fill in all fields');
        }


        if (req.file) {
            const myCloud = await cloudinary.v2.uploader.upload(req.file.path, {
                folder: "shopVue/productImage",
              
            });
            productImage = {
                public_id: myCloud.public_id,
                url: myCloud.url
            };
        }
        const newProduct = new Product({
            title,
            description,
            user,
            price,
            productImage
        })
        await fs.unlink(req.file.path);

        newProduct.save()
        res.status(200).json({
            message: 'post created successfully',
            newProduct
        })



    } catch (error) {
        res.status(500).json('error' + error)
    }
}




//method :post 
//route :/dashboard/setupshop
//data :user,shopName,bannerImage
//auth :required
export const setupshop = async (req, res) => {
    try {
        const user = req.user
        const shop = await Shop.findOne({user})
        if(shop){
            res.status(404).json({ error: 'you cant create new shop you already have shop' })
        }
        const { shopName,whatsappNumber } = req.body;
        let bannerImages = {}
        if (!req.file || !shopName || !whatsappNumber) {
            await fs.unlink(req.file.path);

            res.status(404).json({ error: 'enter all field' })
        }
        const myCloud = await cloudinary.v2.uploader.upload(req.file.path, {
            folder: "shopVue/bannerImage",
        });
        bannerImages = {
            public_id: myCloud.public_id,
            url: myCloud.url
        };


        await fs.unlink(req.file.path);

        const newShop = new Shop({
            shopName,
            bannerImages,
            whatsappNumber,
            user,
        });
        console.log(newShop)

        await newShop.save();

        res.status(200).json({
            message: 'Shop created successfully',
            newShop,
        });
        await fs.unlink(req.file.path);
    } catch (error) {
        // await fs.unlink(req.file.path);

        res.status(500).json({ error: 'An error occurred while creating the shop', error });
    }
}


export const updateShopProducts = (req, res) => {
    try {
        res.status(200).json('updateShopproducts')
    } catch (error) {
        res.status(500).json('error')
    }
}


export const deleteShopProducts = (req, res) => {
    try {
        res.status(200).json('deleteShopproducts')
    } catch (error) {
        res.status(500).json('error')
    }
}
