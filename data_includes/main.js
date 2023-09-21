PennController.ResetPrefix(null)

DebugOff()

// ordered blocks from faith to gang, train-test splits for each block
// randomize trials (not templates)
Sequence("train-intro", randomize("faith-train"), "test-intro", randomize("faith-test"))
// randomize("faith-test"), randomize("nc-train"), randomize("nc-test"), randomize("nfric-train"), randomize("nfric-test"), randomize("gang-train"), randomize("gang-test")

// newTrial("consent")
// newTrial("instructions")

newTrial("train-intro", 
    defaultText
        .center()
        .print()
    ,
    newButton("train", "START TRAINING")
        .center()
        .print()
        .wait()
)

Template("faith-train.csv", row =>
    newTrial("faith-train",
    newAudio("root-audio", row.rootaudio)
    ,
    newAudio("plural-audio", row.pluralaudio)
    ,
    newText("root-text", row.root)
        .bold()
    ,
    newText("plural-text", row.plural)
        .bold()
    ,
    newImage("root-image", row.rootimage)
        .size(200, 200)
    ,
    newImage("plural-image", row.pluralimage)
        .size(200, 200)
    ,
    newTimer("intertrial-wait", 1000)
        .start()
        .wait("first")
    ,
    newCanvas("images", 450, 200)
        .add(0, 0, getImage("root-image"))
        .add(250, 0, getImage("plural-image"))
        .add("center at 25%", 225, getText("root-text"))
        .add("center at 75%", 225, getText("plural-text"))
        .center()
        .print()
    ,
    newTimer("before-wait", 500)
        .start()
        .wait("first")
    ,
    getAudio("root-audio")
        .play()
        .wait("first")
    ,
    newTimer("sg-pl-wait", 500)
        .start()
        .wait("first")
    ,
    getAudio("plural-audio")
        .play()
        .wait("first")
    ,
    newTimer("a-wait", 500)
        .start()
        .wait("first")
))

newTrial("test-intro", 
    defaultText
        .center()
        .print()
    ,
    newButton("test", "START TESTING")
        .center()
        .print()
        .wait()
)

Template("faith-train.csv", row =>
    newTrial("faith-test", 
        newTimer("after-wait", 1000)
            .start()
            .wait()
        ,
        newAudio("root-audio", row.rootaudio)
            .play()
        ,
        newText("root-text", row.root)
            .bold()
            .print()
        ,
        newImage("root-image", row.rootimage)
            .size(200, 200)
            .print()
        ,
        newImage("plural-image", row.pluraimage)
            .size(200, 200)
            .print()
        ,
        newButton("cand1-button", row.cand1)
            .print()
        ,
        newButton("cand2-button", row.cand2)
            .print()
        ,
        newButton("cand3-button", row.cand3)
            .print()
        ,
        newButton("cand4-button", row.cand4)
            .print()
        ,
        newButton("cand5-button", row.cand5)
            .print()
        ,
        newCanvas("selector-canvas", 800, 200)
            .add("center at 25%", 0, getImage("root-image"))
            .add("center at 25%", 250, getText("root-text"))
            .add("center at 75%", 0, getImage("plural-image"))
            .add("center at 100%", "center at 0%", getButton("cand1-button"))
            .add("center at 100%", "center at 25%", getButton("cand2-button"))
            .add("center at 100%", "center at 50%", getButton("cand3-button"))
            .add("center at 100%", "center at 75%", getButton("cand4-button"))
            .add("center at 100%", "center at 100%", getButton("cand5-button"))
            .center()
            .print()
        ,
        newSelector("plural-choice")
            .add(getButton("cand1-button") , getButton("cand2-button") , getButton("cand3-button") , getButton("cand4-button"), getButton("cand5-button"))
            .shuffle()
            .wait()
            .log()
    ) // end trial
) // end template