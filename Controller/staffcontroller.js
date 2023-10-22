const staffManage = require("../Model/staffmodel");


const create_staff = async(req, res) =>{
    try {
        let staffss = new staffManage({
            StaffName:req.body.StaffName,
            Staffemail:req.body.Staffemail,
            Staffphone:req.body.Staffphone,
            Staffdob:req.body.Staffdob
        })
        console.log(staffss)
        
        let existStaff = await staffManage.findOne({
            $or: [{Staffemail:req.body.Staffemail}, {Staffphone:req.body.Staffphone}]
        })
        if(existStaff){
            
            res.json({
                message: "already Added"
            })
        }
        else{
            staffss.save()
            
                res.json({
                    message: "Staff Details Created successful"
                })
        }

        
    } catch (error) {
        console.log(error)
        res.json({
            message: "error"
        })
    }
}


// |============ Get method, isActive =============|

const getstaff = async(req,res)=>{
    const page = 1;
    const limit = 2;
    try {
        const skip = (page-1)*limit;
        const gtStaff = await staffManage.find({ isActive: true}).skip(skip).limit(limit);
        res.json(gtStaff)
    } catch (error) {
        res.json({
            message:"error"
        })
    }
}

// |============ soft Delete deactivate Method =============|


const deletestaff = async(req,res)=>{
    try {
        let StaffId = req.body.staffId;
        await staffManage.findByIdAndUpdate(StaffId, {isActive: false, isDeleted: true });
        res.json({
            message: "staff details deleted"
        });
    } catch (error) {
        
        res.json({
            message: "error"
        });
    }
}

// |============ ReActivate Method =============|

const reActivatestaff = async(req,res)=>{
    try {
        let staffId = req.body.staffId;
        await staffManage.findByIdAndUpdate(staffId,{isActive:true, isDeleted:false});
        res.json({
            message: "staff details reactivated"
        })
    } catch (error) {
        res.json({
            message: "error occured"
        })
    }
}

module.exports = {
    create_staff,
    getstaff,
    deletestaff,
    reActivatestaff
}