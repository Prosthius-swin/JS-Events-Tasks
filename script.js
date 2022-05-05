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

function bg()
{
    if(document.body.style.backgroundColor === "green")
    {
        document.body.style.backgroundColor = "red";
    } else
    {
        document.body.style.backgroundColor = "green";
    }
}

function disabled()
{
    document.getElementById('disabled').disabled = true;
}

function enable()
{
    if(document.getElementById('enable').innerHTML === "Enable Change bg" && document.getElementById('disabled').disabled === true)
    {
        document.getElementById('enable').innerHTML = "Disable Change bg"
        document.getElementById('disabled').disabled = false;
    } else 
    {
        document.getElementById('enable').innerHTML = "Enable Change bg"
        document.getElementById('disabled').disabled = true;
    }
}