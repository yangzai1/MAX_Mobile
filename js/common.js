

$(document).ready(function(){
    BaoKuPushActive()
    function BaoKuPushActive(){
        
        //  周岁下拉框 start
        $('.BaoKuPushDown').on('touchstart',function(){
            $('.BaoKuPushDig').hide()
            $(this).closest('dd').find('.BaoKuPushDig').show()  
            return false;
        })
        $(document).on('touchstart',function(){
            
            $('.BaoKuPushDig').hide()
            
        })
        $('.BaoKuPushDig p').on('touchstart',function(){
            if($(this).attr('data-role')==1){
                
                $('.BaoKuDangBan').show();
                $(this).closest('dd').next('dd').find('.BaoKuPushText').html('1份');
                
            }
            else if($(this).attr('data-role')==2){
                
                $('.BaoKuDangBan').hide()
                
            }
            
            
            
            $(this).attr('class','ChangeThis').siblings().attr('class','')
            $(this).closest('dd').find('.BaoKuPushText').html($(this).html());
            
        })
        // 周岁下拉框 end
        
        
        
        // 分享页 start
        $('.BaoKuSharePushDown').on('touchstart',function(){
            $('.BaoKuSharePushDig').hide()
            $(this).closest('dd').find('.BaoKuSharePushDig').show() 
            return false;
        })
        $(document).on('touchstart',function(){
            
            $('.BaoKuSharePushDig').hide()
            
        })
        $('.BaoKuSharePushDig p').on('touchstart',function(){
            if($(this).attr('data-role')==1){
                
                $('.BaoKuShareDangBan').show();
                $(this).closest('dd').next('dd').find('.BaoKuSharePushText').html('1份');
                
            }
            else if($(this).attr('data-role')==2){
                
                $('.BaoKuShareDangBan').hide()
                
            }
            
            
            
            $(this).attr('class','ChangeThis').siblings().attr('class','')
            $(this).closest('dd').find('.BaoKuSharePushText').html($(this).html());
            
        })
        
        // 分享页 end
        
    
    }
    BaoKuShareMackHide()
    function BaoKuShareMackHide(){
        
        
        $('.BaoKuShareMackDig').find('div').eq(1).on('touchstart',function(){
            
            $('.BaoKuShareMack').hide()
            
        })
        
        
        
    }
    FillInInmationChooseCard()
    function FillInInmationChooseCard(){
        var Num=0
        $('.FillInInformationSubmit').on('touchstart',function(){
            $('.FillInInformationChooseContent').eq(Num).hide()
            Num++
            if(Num>2){
                
                Num=2
            }
            $('.FillInInformationChooseContent').eq(Num).show()
            console.log(Num)
        })
        $('.FillInInformationPrev').on('touchstart',function(){
                $('.FillInInformationChooseContent').eq(Num).hide()
                Num--
                if(Num<0){
                
                    Num=0
                }
                $('.FillInInformationChooseContent').eq(Num).show()
                console.log(Num)
                
            })
        
    }
    FillInInmationCheck()
    function FillInInmationCheck(){
        
        $('.FillInInformationChecked>span').on('touchstart',function(){
            
            
            $(this).toggleClass('Check')
            
            
            
        })

    }
    
    
    
    
    
    
})
