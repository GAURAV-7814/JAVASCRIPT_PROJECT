//creating array
const array = [];
//creating function for adding values
function adding(name,age,gender,mobile_number,address)
{
    //creating object for storing values
    var object  =
    {
        "name" : name,
        "age" : age,
        "gender" : gender,
        "mobile_number" : mobile_number,
        "address" : address
    };
    //pushing object to the array
    array.push(object);
}
//creating function for showing values as output
function output()
{
    let i = 0;
    //creating while loop to iterate through array
    while(i<array.length)
    {
        console.log("\nNumber is : " , i+1);
        console.log("Name is : " , array[i]["name"]);
        console.log("Age is : " , array[i]["age"]);
        console.log("Gender is : " , array[i]["gender"]);
        console.log("Mobile Number is : " , array[i]["mobile_number"]);
        console.log("Address is : " , array[i]["address"]);
        i += 1;
    }
}
//creating count function to know total number of values
function count()
{
    console.log("\nNumber of Values in Array is : " , array.length);
}
//Passing values to adding function
adding("GAURAV","19","MALE","7845693210","KHARAR");
adding("ANUJ","19","MALE","8147814528","KHARAR");
adding("RAGHAV","18","MALE","9574861320","KHARAR");
adding("HARSH","20","MALE","7741528963","KHARAR");
adding("PARAG","17","MALE","978541236","KHARAR");
//calling output function
output();
//calling count function 
count();