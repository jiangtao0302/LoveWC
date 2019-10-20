
function dataShow(){
		var url='<%=path%>/bigDataCon/getdata.it';
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('main4'));
		var option = {
			title:{
				left:'2%',
				text:'各月份发生灾害次数堆叠柱状图',
			},
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		    	left:'left',
				orient: 'vertical',
		    	top:40,
		    	left:20,
		        data: []
		    },
		    grid: {
		        left: '11%',
		        right: '7%',
		        bottom: '3%',
		        top:'7%',
		        containLabel: true
		    },
		    xAxis:  {
		        type: 'value',
		        name: "(单位/次)",
		        nameTextStyle: {
		            fontSize:14,
		        },
		    },
		    yAxis: {
		        type: 'category',
		        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
		    },
		    series: []
		};
		//通过Ajax获取数据
            $.ajax({
                type : "post",
                async : false, //同步执行
                url : url,
                dataType : "json", //返回数据形式为json
                success : function(result) {
                    if (result) {
                        var datas = [];
                        var legends = [];
                        for(var i=0;i<result.length;i++){
                        	legends.push(result[i].zaihai);
                        	datas.push({
                            	 name : result[i].zaihai,
						         type: 'bar',
						         stack: '总量',
						         label: {
					             normal: {
					                    show: true,
					                    //position: 'insideRight'
					                }
					            },
                                data : result[i].countNum,
                            });
                        }
                        option.legend.data=legends;
                        option.series = datas;
                        myChart.hideLoading();
                        myChart.setOption(option);
                    }
                },
                error : function(errorMsg) {
                alert("图表请求数据失败啦!");
             }
        });
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option)
	}