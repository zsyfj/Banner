var imgs = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg'];
			var prev = document.getElementById('prev');
			var next = document.getElementById('next');
			var img = document.getElementById('img');
			var txt = document.querySelector('.text');
			var li = document.querySelectorAll('.nav li');
			var now = 0;
			next.onclick = function(){
				now ++;
				if(now > imgs.length-1){
					now = 0;			//当切换到最后一张后，直接切换到第一张
				}
				fn();
			}
			
			prev.onclick = function(){
				now--;
				if(now < 0){
					now = imgs.length-1;  //当切换到第一张后，直接切换到最后一张
				}
				fn();
			}
			function fn(){
				for(var i = 0; i < li.length; i++){	
					//清除其他小圆点的active,不推荐使用li[i].className=''，因为后添加的className会覆盖前面的className		
					li[i].classList.remove('active');
				}
				//给当前图片对应的小圆点添加active
				li[now].classList.add('active');
				img.src = imgs[now];
				txt.innerHTML = '这是第' + (now+1) + '张图片';
			}
			
			
			for(var i = 0; i < li.length; i++){
				//浏览器代码加载到这里就执行
				li[i].index = i;
				//鼠标移入移出，显示缩略图
				li[i].onmouseover = function(){
					// 鼠标移入才执行
					this.querySelector('img').style.display = 'block'; //此处不能用li[i]
				}
				li[i].onmouseout = function(){
					this.querySelector('img').style.display = 'none';
				}
				
				//点击小圆点，切换图片
				li[i].onclick = function(){
					now = this.index;
					fn();
				}
			}