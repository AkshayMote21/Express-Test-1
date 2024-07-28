import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    title : {type :String , required : true},
    author : {type :String , required : true},
    publishedYear : {type :Number , required : true},
    genre : {type :String , required : true},
    summary : String 

});

const Book = model("Book",bookSchema);

export default Book;