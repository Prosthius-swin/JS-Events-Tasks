function helloWorld()
{
    document.getElementById('helloWorld').innerHTML = "Hello World";
}

function two()
{
    document.getElementById('helloWorld').innerHTML = "Goodbye Mars";
}

function three()
{
    document.getElementById('helloWorld').innerHTML = "Ipsum Dominum";
}

function four()
{
    if(document.body.style.backgroundColor === "green")
    {
        document.body.style.backgroundColor = "red";
    } else
    {
        document.body.style.backgroundColor = "green";
    }
}
