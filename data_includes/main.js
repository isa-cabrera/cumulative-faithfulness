PennController.ResetPrefix(null)

DebugOff()

Template("images.csv", row =>
    newTrial("images", 
        newImage("sgimage", row.singular)
            .center()
        ,
        newText("sgtext", row.singular)
        ,
        newImage("plimage", row.plural)
            .center()
        ,
        newText("pltext", row.plural)
        ,
        newCanvas("images", 15000, 300)
            .add("center at 20%", "center at 50%", getImage("sgimage"))
            .add("center at 80%", "center at 50%", getImage("plimage"))
            .add("center at 20%", 300, getText("sgtext"))
            .add("center at 80%", 300, getText("pltext"))
            .center()
            .print()
        ,
        newTimer("a-wait", 2000)
        .start()
        .wait("first")
) // end trial
) // end template