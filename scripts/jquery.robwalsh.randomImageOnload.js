(function($){
	
	$.randomImage = {
		defaults: {
			
			//you can change these defaults to your own preferences.
			path: 'http://dl.dropbox.com/u/72294803/Nextphoto/', //change this to the path of your images
//			myImages: ['2012_uc_nepal/1-02.jpg', '2012_uc_nepal/s2-32.jpg', '2012_uc_nepal/s3-07.jpg', '2012_nepal_cafe/6-15.jpg', '2011_china/great_wall.jpg', '2011_china/hutong_fireworks.jpg', 'my_summer_seoul/2-r2-30.jpg', 'my_summer_seoul/2-r3-31.jpg', 'my_summer_seoul/1-r2-22A.jpg', 'my_summer_seoul/1-r2-12A.jpg' ] //put image names in this bracket. ex: 'harold.jpg', 'maude.jpg', 'etc'

			myImages: ['2014_china_I/2014-04_13.jpg', '2014_china_I/2014-04_27.jpg', '2014_china_II/_000034.jpg', '2013_life_in_seoul/2013-04-19A.jpg', '2013_life_in_seoul/NorthKoreaCamp2014_MG_7210.jpg', '2013_life_in_seoul/_02.jpg', '2014_mountain_I/2014_01_0_17.jpg', '2014_mountain_I/2014_01_0_29.jpg'] //put image names in this bracket. ex: 'harold.jpg', 'maude.jpg', 'etc'			
		}			
	}
	
	$.fn.extend({
			randomImage:function(config) {

				var config = $.extend({}, $.randomImage.defaults, config); 
				
				 return this.each(function() {
						
						var imageNames = config.myImages;
						
						//get size of array, randomize a number from this
						// use this number as the array index

						var imageNamesSize = imageNames.length;

						var lotteryNumber = Math.floor(Math.random()*imageNamesSize);

						var winnerImage = imageNames[lotteryNumber];

						var fullPath = config.path + winnerImage;
						
						
						//put this image into DOM at class of randomImage
						// alt tag will be image filename.
						$(this).attr( {
										src: fullPath,
										alt: winnerImage
									});
				
						
				});	
			}
			
	});
	
	
	
})(jQuery);
