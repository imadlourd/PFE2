    import mongoose from "mongoose";

    const ChallangeSchema = new mongoose.Schema({
        title:{
            type: String,
            required : true,
            unique: true,
        },
        disctiption:{
            type:String,
            required : true,
        },
        score:{
            type:Number,
            required : true,
        },
        books:[String],
        pages: String,
        duration:String,

    });



    const Challange =mongoose.model("Challange", ChallangeSchema);
    export default Challange
