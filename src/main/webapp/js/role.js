$("#table").bootstrapTable({
    method:'get',
    onLoadSuccess:function(){
        alert("success");
    },
    onLoadError:function(){
        alert("failed");
    }
})