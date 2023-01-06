function imageSpin(string)
{
    document.getElementById(string).classList.add("rotate");
    setTimeout(function () {
        document.getElementById(string).classList.remove("rotate");
        document.getElementById(string).classList.add("rotate-back");
        setTimeout(function () {
                    document
                      .getElementById(string)
                      .classList.remove("rotate-back");
        }, 1000);
    }, 1000 );
}