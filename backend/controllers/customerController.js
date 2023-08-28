import Product from '../models/productsModel.js';
import Shop from '../models/shopModel.js'

export const getShop = async (req, res) => {
    try {
        const hostParts = req.hostname.split('.');
        const subdomain = hostParts[0];
        if (!subdomain) {
            return res.status(400).json({ error: 'No subdomain provided' });
        }
        
        const shop = await Shop.findOne({ shopName: subdomain });
        if (!shop) {
            return res.status(404).json({ error: 'Shop not found' });
        }
        const products = await Product.find({ user: shop.user });
        return res.status(200).json({ shop,products });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
};




