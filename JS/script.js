
       
        //get visual components from web browser for countdown 
        let countdown
        const timerDisplay = document.querySelector('.display__time-left')
        const endTime = document.querySelector('.time')
        const endD = document.getElementById('display__end')
        const buttons = document.querySelectorAll('[data-time]')
        
        function timer(seconds)
        {
            
            clearInterval(countdown)//clear previous countdown
            const now = Date.now()//set curr
            const then = now + seconds * 1000//add sec (upto) time 
            displayTimeLeft(seconds)
            displayEndTime(then)
        //begin
            countdown = setInterval( () =>
            {
                const secondsLeft = Math.round((then - Date.now()) / 1000)
        
                if (secondsLeft < 0)
                {
                    clearInterval(countdown)
                    return
                }
        
                displayTimeLeft(secondsLeft)
            }, 1000 )
            //to highlight start time
            setTimeout(() => {
                
              document.getElementById("t").style.color="white"
              }, 1000);
              document.getElementById("t").style.color="#f85"
        }
        
        function displayTimeLeft(seconds)//20sec
        {
            const minutes = Math.floor(seconds / 60)//120/60=2min
            const remainderSeconds = seconds % 60//120%60=0 ------------- 115%6=55sec
            const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
            timerDisplay.textContent = display
        }
        //Adding current time + set time
        function displayEndTime(timestamp)
        {
            const end = new Date(timestamp)
            const hour = end.getHours()
            const adjustedHour = hour > 12 ? hour - 12 : hour
            const minutes = end.getMinutes()
            endD.textContent='Come back At'
            endTime.textContent = `${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`
            
        }
        
        function startTimer()
        {
            
            const seconds = parseInt(this.dataset.time)
            timer(seconds)
           
        }
        
        buttons.forEach( button => button.addEventListener('click', startTimer))
        
        document.customForm.addEventListener('submit', function(e)
        {
            e.preventDefault()
            const mins = this.minutes.value
            timer(mins * 60)
            
            this.reset()
            
        })
       