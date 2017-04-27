
//<====== Three type of sliders =======>
//======= without animation 'basic'
//======= with fadeIn/fadeOut animation 'fade'
//======= with slide right to left animation 'slide'

//<====== How it works =======>
//======= You only need list that contains your slider items in HTML with some attributes: class="slider-box", data-animation="" and data-time=""
//======= data-animation="" allows you to choose which type of animation you would like to use
//======= data-time="" allows you to set the time after which the slide changes


$(document).ready(function () {
    $('.slider-box').each(function () {
        var self = $(this); // get us sureness that $(this) will be allways 'slider=box'
        var timer = parseInt(self.data('time'), 10); // number of mili seconds after which function will be repeated

        //Slider with slide animation and only 2 item in the list
        if (self.data('animation') === 'slide' && self.children().length === 2) {
            self.children('li').clone().appendTo(self);
            self.children('li:not(:first)').removeClass('current');
        }

        // a condition checking if slider contains 2 or more items
        if (self.children().length >= 2) {
            //a function that fires when a timer specified by a variable is timed out
            setInterval(function () {

                var current = self.children('li.current');
                var next = current.next();
                var sliderLength = self.children('li').length;
                var slideIndex = self.children('li.current').index();

                // Slider without any animation showing/hiding slides in loop
                if (self.data('animation') === 'basic') {
                    next.addClass('current');
                    current.removeClass('current');

                    if (slideIndex + 1 === sliderLength) {
                        self.children('li:first').addClass('current');
                    }
                }

                //Slider with fadeIn/fadeOut animation
                if (self.data('animation') === 'fade') {
                    next.fadeIn(function () {
                        $(this).addClass('current');
                    });
                    current.fadeOut(function () {
                        $(this).removeClass('current');
                    });

                    if (slideIndex + 1 === sliderLength) {
                        self.children('li:first').fadeIn(function () {
                            $(this).addClass('current');
                        });
                    }
                }

                //Slider with slide animation
                if (self.data('animation') === 'slide') {
                    self.children('li').removeClass('prev');
                    current.addClass('prev').removeClass('current');
                    next.addClass('current');

                    if (slideIndex + 1 === sliderLength) {
                        self.children('li:first').addClass('current');
                    }
                }

            }, timer);
        }
    });

});
