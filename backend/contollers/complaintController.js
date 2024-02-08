const Complaint = require("../models/complaintModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create Complaint 
exports.createComplaint = catchAsyncErrors(async (req, res, next) => {

  const complaint = await Complaint.create(req.body);

  res.status(201).json({
    success: true,
    complaint,
  });
});


//Get All Complaints--admin
exports.getAllComplaints = catchAsyncErrors(async (req, res, next) => {

    const complaints = await Complaint.find();
  
    res.status(202).json({
      success: true,
      complaints,
    });
  });

//Get Pending Complaints
exports.getPendingComplaints = catchAsyncErrors(async (req, res, next) => {

    const complaint = await Complaint.find({status:"Pending"});
  
    res.status(202).json({
      success: true,
      complaint,
    });
  });

//Get Solved Complaints
exports.getSolvedComplaints = catchAsyncErrors(async (req, res, next) => {

    const complaint = await Complaint.find({status:"Solved"});
  
    res.status(202).json({
      success: true,
      complaint,
    });
  });


//Delete Complaint
exports.deleteComplaint = catchAsyncErrors(async (req,res,next) =>{
    let complaint = await Complaint.findById(req.params.id);

    if(!complaint){
        return next(new ErrorHandler("Complaint Not Found",404));
     }

   
    else {
        
        complaint = await Complaint.findByIdAndDelete(req.params.id);
        
        res.json({
        success:true,
        message:"complaint is deleted"
       })}
})

exports.updateComplaint = catchAsyncErrors(async (req,res,next) =>{
    let complaint = await Complaint.findById(req.params.id);

    if(!complaint){
        return next(new ErrorHandler("Complaint Not Found",404));
     }

   
    else {
        
        complaint = await Complaint.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false});
    
         res.status(203).json({
                success:true,
                 complaint
        })}
})

exports.complaintDetails = catchAsyncErrors(async (req,res,next) =>{
  let complaint = await Complaint.findById(req.params.id);

  if(!complaint){
      return next(new ErrorHandler("Complaint Not Found",404));
   }

 
  else {  
       res.status(203).json({
              success:true,
               complaint
      })}
})

