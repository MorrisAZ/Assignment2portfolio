let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the model
let Bcontact = require('../models/Bcontact');


module.exports.displayBcontactList = (req, res, next) =>{
    Bcontact.find((err, bcontactList)=>{
    if(err)
   {
      return console.error(err);
   }
   else
   {
    //console.log(businesscontactList);  
      
    res.render('bcontact/list', {title: 'Business Contacts', 
    BcontactList: bcontactList, 
    displayName: req.user ? req.user.displayName: ''});
   }
  });
}

module.exports.displayAddPage = (req,res, next) => {
   res.render('bcontact/add', {title: 'Add a new Contact',displayName: req.user ? req.user.displayName: ''});
 }

module.exports.displayProcessAddPage = (req,res,next) => {
   let newBcontact = Bcontact({
     "name":req.body.name,
     "phone":req.body.phone,
     "email":req.body.email
   });

   Bcontact.create(newBcontact, (err, Bcontact)=>{
     if(err)
     {
       console.log(err);
       res.end(err);
     }else
     {
       res.redirect('/bcontact-list');
     }
   });

}

module.exports.displayEditPage = (req, res, next) => {
   let id = req.params.id;

   Bcontact.findById(id, (err, bcontactToEdit) =>{
     if(err)
     {
       console.log(err);
       res.end(err);
     }
     else
     {
       //show edit view
       res.render('bcontact/edit', {title: 'Edit Business Contact', bcontact : bcontactToEdit,displayName: req.user ? req.user.displayName: ''})
     }
   });
}

module.exports.displayProcessEditPage = (req, res, next) => {
   let id = req.params.id;
   
   let updatedBcontact = Bcontact({
     "_id":id,
     "name":req.body.name,
     "phone":req.body.phone,
     "email":req.body.email

   });

   Bcontact.updateOne({_id: id}, updatedBcontact, (err)=> {
     if(err)
     {
       console.log(err);
       res.end(err);
     }else
     {
       //refresh business contact list
       res.redirect('/bcontact-list')
     }
   });
}

module.exports.displayProcessDeletePage = (req,res,next) => {
   let id = req.params.id;

 Bcontact.remove({_id: id}, (err) =>{
   if(err)
     {
       console.log(err);
       res.end(err);
     }else
     {
       //delete entry from business contact list
       res.redirect('/bcontact-list')
     }
 });
}

