const clock = document.querySelector('#clock');
// const clock = document.getElementById('#clock')


 setInterval(function() {
        let date = new Date();
        // console.log(date.toLocaleString());
        clock.innerHTML = date.toLocaleTimeString();
},1000);        //1000 second hote hai