// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("are you sure you want to delete contact?"))
                {
                    event.preventDefault();
                    window.location.assign('/bcontact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();