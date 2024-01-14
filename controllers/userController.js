const User = require('../models/User');

//To get all Products
exports.getUsers= async(req,res)=>{

    try{
        const  users = await User.find({});
        res.json(users);

    } catch(err){
        console.log(err);
    }
}

/* exports.getSingleProduct =async(req,res)=>{
    const productId= req.params.id;
    //console.log(productId);
    try{
        const prod = await Product.findById(productId);
        //res.json({messaaaaage:productId})
        if(prod){
            res.json({product:prod})
        }
        else{
            res.json({message:'product not found'})
        }

    }
    catch(err){
        
        res.json({error:err})
    }
    

}

exports.createProduct= async(req,res)=>{
    const {title,onSale,price,description,sellPrice,mainImage} = req.body;

    
    const product = await Product.create(req.body);
    if(product){
        res.status(200).json({message:'You have inserted a new product'})
    }
    else{
        res.json({message:'Error while adding '})
    }
} */