import 'dart:async';
import 'dart:html';

import 'colour.dart';

class ColourPicker {
    static Set<ColourPicker> _pickers = new Set<ColourPicker>();

    InputElement _input;
    Element _anchor;

    Element _button;
    Element _buttonSwatch;
    Element _overlay;
    Element _window;

    CanvasElement _mainPicker;
    FancySlider _mainSlider;

    FancySlider _rgb_slider_red;
    FancySlider _rgb_slider_green;
    FancySlider _rgb_slider_blue;
    NumberInputElement _rgb_input_red;
    NumberInputElement _rgb_input_green;
    NumberInputElement _rgb_input_blue;

    FancySlider _hsv_slider_hue;
    FancySlider _hsv_slider_sat;
    FancySlider _hsv_slider_val;
    NumberInputElement _hsv_input_hue;
    NumberInputElement _hsv_input_sat;
    NumberInputElement _hsv_input_val;

    FancySlider _lab_slider_l;
    FancySlider _lab_slider_a;
    FancySlider _lab_slider_b;
    NumberInputElement _lab_input_l;
    NumberInputElement _lab_input_a;
    NumberInputElement _lab_input_b;

    TextInputElement _hex_input;

    int pickMode = 3; // 0-8 = r,g,b, h,s,v, l,a,b

    List<FancySlider> _sliders = <FancySlider>[];
    List<FancySliderFill> _fillers = <FancySliderFill>[];
    
    Colour colour = new Colour();
    Colour previousColour;

    ColourPicker(InputElement this._input, {int width = 48, int height = 25, int colourInt = 0xDDDDDD, Colour colour}) {
        if (colour == null) {
            colour = new Colour.fromHex(colourInt);
        }
        createButton(colour, width, height);
        createElement();

        initFillers();

        readColourFromInput();

        _pickers.add(this);

        ColourPickerMouseHandler.init();
    }

    void update() {
        print("update");

        this._rgb_slider_red.value = colour.redDouble;
        this._rgb_slider_green.value = colour.greenDouble;
        this._rgb_slider_blue.value = colour.blueDouble;

        this._hsv_slider_hue.value = colour.hue;
        this._hsv_slider_sat.value = colour.saturation;
        this._hsv_slider_val.value = colour.value;

        this._lab_slider_l.value = colour.lab_lightness_scaled;

        this._lab_slider_a.minVal = (new Colour.from(this.colour)..lab_a = -127.0).lab_a;
        this._lab_slider_a.maxVal = (new Colour.from(this.colour)..lab_a = 128.0).lab_a;
        this._lab_slider_a.value = colour.lab_a;
        this._lab_slider_b.minVal = (new Colour.from(this.colour)..lab_b = -127.0).lab_b;
        this._lab_slider_b.maxVal = (new Colour.from(this.colour)..lab_b = 128.0).lab_b;
        this._lab_slider_b.value = colour.lab_b;

        for (int i=0; i<_sliders.length; i++) {
            _sliders[i]
                ..update(true)
                ..drawBackground(_fillers[i]);
        }

        this._buttonSwatch.style.backgroundColor = this.colour.toStyleString();
    }
    
    void open() {
        this.previousColour = new Colour.from(this.colour);

        this.readColourFromInput();
        this.update();

        this._overlay.style.display = "block";
        this.resizeOverlay();

        for (ColourPicker p in _pickers) {
            if (p!=this) {
                p.close();
            }
        }
    }

    void close() {
        this._overlay.style.display = "none";
    }
    
    void readColourFromInput() { 
        this.colour = new Colour.fromStyleString(_input.value);
        this.update();
    }
    
    void writeColourToInput() { 
        this._input.value = this.colour.toStyleString(); 
        this._input.dispatchEvent(new Event("change"));
    }

    void initFillers() {
        //rgb
        _fillers.add((double val) => new Colour.from(this.colour)..redDouble = val);
        _fillers.add((double val) => new Colour.from(this.colour)..greenDouble = val);
        _fillers.add((double val) => new Colour.from(this.colour)..blueDouble = val);

        //hsv
        _fillers.add((double val) => new Colour.from(this.colour)..hue = val);
        _fillers.add((double val) => new Colour.from(this.colour)..saturation = val);
        _fillers.add((double val) => new Colour.from(this.colour)..value = val);

        //lab
        _fillers.add((double val) => new Colour.from(this.colour)..lab_lightness_scaled = val);
        _fillers.add((double val) => new Colour.from(this.colour)..lab_a = val);
        _fillers.add((double val) => new Colour.from(this.colour)..lab_b = val);
    }

    // element and getter stuff ###############################################################

    InputElement get input => _input;

    void createButton(Colour colour, int width, int height) {
        Element anchor = new DivElement()
            ..className = "colourPicker_anchor";

        Element b = new DivElement()
            ..className = "colourPicker_button"
            ..onClick.listen((MouseEvent e) {
                this.open();
                e.preventDefault();
                e.stopPropagation();
            });
        anchor.append(b);

        Element border1 = new DivElement()..className = "colourPicker_button_inner colourPicker_button_inner_1";
        b.append(border1);
        Element border2 = new DivElement()..className = "colourPicker_button_inner colourPicker_button_inner_2";
        b.append(border2);

        Element swatch = new DivElement()
            ..className = "colourPicker_swatch";
        b.append(swatch);

        Colour light = colour * 1.15;
        Colour dark = colour * 0.85;
        Colour bordercol = colour * 0.4;

        b.style
            ..width = "${width+2}px"
            ..height = "${height+2}px"
            ..borderColor = bordercol.toStyleString();
        border1.style
            ..width = "${width}px"
            ..height = "${height}px"
            ..backgroundColor = colour.toStyleString()
            ..borderLeftColor = light.toStyleString()
            ..borderTopColor = light.toStyleString()
            ..borderRightColor = dark.toStyleString()
            ..borderBottomColor = dark.toStyleString();
        border2.style
            ..width = "${width}px"
            ..height = "${height}px"
            ..backgroundColor = colour.toStyleString()
            ..borderLeftColor = dark.toStyleString()
            ..borderTopColor = dark.toStyleString()
            ..borderRightColor = light.toStyleString()
            ..borderBottomColor = light.toStyleString();
        swatch.style
            ..width = "${width-12}px"
            ..height = "${height-12}px";

        this._anchor = anchor;
        this._button = b;
        this._buttonSwatch = swatch;

        this._input.replaceWith(anchor);
    }

    void createElement() {
        Element overlay = new DivElement()
            ..className = "colourPicker_overlay";

        this._anchor.append(overlay);

        Element overlay_shade = new DivElement()
            ..className = "colourPicker_overlay_2"
            ..onClick.listen((MouseEvent e) {
                this.close();
                e.preventDefault();
                e.stopPropagation();
            });

        overlay.append(overlay_shade);

        Element w = new DivElement()
            ..className = "colourPicker_window"
            ..onClick.listen((Event e) => e.stopPropagation());
            //..text = "Stuff goes in here";

        overlay.append(w);
        this._window = w;

        //new FancySlider(0.0, 100.0, 250, 15, false)..appendTo(w)..onChange.listen((Event e) => this.update());

        this._mainPicker = new CanvasElement(width:256, height:256)
            ..className="colourPicker_canvas"
            ..onMouseDown.listen(this._pickerDrag)
            ..onMouseMove.listen(this._pickerDrag);
        w.append(_mainPicker);

        this._mainSlider = new FancySlider(0.0, 1.0, 25, 256, true)..appendTo(w)..onChange.listen((Event e) => _setFromPicker());
        _place(_mainSlider.bar, 268, 0);

        int bar_left = 300;

        // RGB #####################################################

        this._rgb_slider_red = new FancySlider(0.0, 1.0, 256, 16, false)
            ..appendTo(w)
            ..onChange.listen((Event e) {
                this.colour.redDouble = this._rgb_slider_red.value;
                this.update();
            });
        _place(_rgb_slider_red.bar, bar_left,0);
        _sliders.add(_rgb_slider_red);

        this._rgb_slider_green = new FancySlider(0.0, 1.0, 256, 16, false)
            ..appendTo(w)
            ..onChange.listen((Event e) {
                this.colour.greenDouble = this._rgb_slider_green.value;
                this.update();
            });
        _place(_rgb_slider_green.bar, bar_left,30);
        _sliders.add(_rgb_slider_green);

        this._rgb_slider_blue = new FancySlider(0.0, 1.0, 256, 16, false)
            ..appendTo(w)
            ..onChange.listen((Event e) {
                this.colour.blueDouble = this._rgb_slider_blue.value;
                this.update();
            });
        _place(_rgb_slider_blue.bar, bar_left,60);
        _sliders.add(_rgb_slider_blue);

        // RGB #####################################################

        this._hsv_slider_hue = new FancySlider(0.0, 1.0, 256, 16, false)
            ..appendTo(w)
            ..onChange.listen((Event e) {
                this.colour.hue = this._hsv_slider_hue.value;
                this.update();
            });
        _place(_hsv_slider_hue.bar, bar_left,100);
        _sliders.add(_hsv_slider_hue);

        this._hsv_slider_sat = new FancySlider(0.0, 1.0, 256, 16, false)
            ..appendTo(w)
            ..onChange.listen((Event e) {
                this.colour.saturation = this._hsv_slider_sat.value;
                this.update();
            });
        _place(_hsv_slider_sat.bar, bar_left,130);
        _sliders.add(_hsv_slider_sat);

        this._hsv_slider_val = new FancySlider(0.0, 1.0, 256, 16, false)
            ..appendTo(w)
            ..onChange.listen((Event e) {
                this.colour.value = this._hsv_slider_val.value;
                this.update();
            });
        _place(_hsv_slider_val.bar, bar_left,160);
        _sliders.add(_hsv_slider_val);

        // HSV #####################################################

        this._lab_slider_l = new FancySlider(0.0, 1.0, 256, 16, false)
            ..appendTo(w)
            ..onChange.listen((Event e) {
                this.colour.lab_lightness_scaled = this._lab_slider_l.value;
                this.update();
            });
        _place(_lab_slider_l.bar, bar_left,200);
        _sliders.add(_lab_slider_l);

        this._lab_slider_a = new FancySlider(0.0, 1.0, 256, 16, false)
            ..appendTo(w)
            ..onChange.listen((Event e) {
                this.colour.lab_a = this._lab_slider_a.value;
                this.update();
            });
        _place(_lab_slider_a.bar, bar_left,230);
        _sliders.add(_lab_slider_a);

        this._lab_slider_b = new FancySlider(0.0, 1.0, 256, 16, false)
            ..appendTo(w)
            ..onChange.listen((Event e) {
                this.colour.lab_b = this._lab_slider_b.value;
                this.update();
            });
        _place(_lab_slider_b.bar, bar_left,260);
        _sliders.add(_lab_slider_b);

        // #########################################################

        this._overlay = overlay;
        window.onResize.listen(resizeOverlay);
        resizeOverlay();
    }

    static void _place(Element e, int x, int y) {
        e.style
            ..top = "${y}px"
            ..left = "${x}px";
    }

    void _pickerDrag(MouseEvent e) {

        this.update();
    }

    void _setFromPicker() {
        this.update();
    }

    void resizeOverlay([Event e]) {
        int width = window.innerWidth;
        int height = window.innerHeight;

        this._overlay.style
            ..width = "${width}px"
            ..height = "${height}px";

        this._window.style
            ..left = "${(width - this._window.clientWidth)~/2}px"
            ..top = "${(height - this._window.clientHeight)~/2}px";
    }

    void destroy() {
        window.removeEventListener("resize", this.resizeOverlay);
        this._button.replaceWith(this._input);
        _pickers.remove(this);
    }
}

typedef Colour FancySliderFill(double fraction);

class FancySlider {
    static Set<FancySlider> _sliders = new Set<FancySlider>();

    Element bar;
    Element slider;
    CanvasElement background;

    int width;
    int height;

    double minVal;
    double maxVal;
    double value;

    bool vertical;
    bool dragging = false;

    StreamController<Event> _streamController;
    Stream<Event> onChange;

    FancySlider(double this.minVal, double this.maxVal, int this.width, int this.height, bool this.vertical) {
        this._streamController = new StreamController<Event>();
        this.onChange = this._streamController.stream;
        this.value = minVal;

        this.bar = new DivElement()
            ..className = "fancySlider_bar"
            ..style.width = "${width}px"
            ..style.height = "${height}px"
            ..onMouseDown.listen(this._mouseDown);

        this.background = new CanvasElement(width:width, height:height)
            ..className = "fancySlider_background";

        this.slider = new DivElement()
            ..className = "fancySlider_slider_${this.vertical?"vertical":"horizontal"}";

        this.bar.append(this.background);
        this.bar.append(this.slider);
        this.update();

        _sliders.add(this);

        ColourPickerMouseHandler.init();
    }

    void update([bool silent = false]) {
        double percent = (this.value - this.minVal) / (this.maxVal - this.minVal);

        if (this.vertical) {
            int pos = (this.height * percent).floor();
            this.slider.style.top = "${pos}px";
        } else {
            int pos = (this.width * percent).floor();
            this.slider.style.left = "${pos}px";
        }

        if (!silent) {
            this._streamController.add(new CustomEvent("update", detail: this));
        }
    }

    void _mouseDown(MouseEvent e) {
        this.dragging = true;

        this.setFromMousePos(e);
    }

    void _mouseUp(MouseEvent e) {
        this.dragging = false;
    }

    void _mouseMove(MouseEvent e) {
        if (!this.dragging) { return; }

        this.setFromMousePos(e);
    }

    void setFromMousePos(MouseEvent e) {
        int relx = e.client.x - this.bar.documentOffset.x;
        int rely = e.client.y - this.bar.documentOffset.y;

        double percent;
        if (this.vertical) {
            percent = (rely / this.height).clamp(0.0, 1.0);
        } else {
            percent = (relx / this.width).clamp(0.0, 1.0);
        }

        this.value = percent * (this.maxVal - this.minVal) + this.minVal;

        this.update();
    }

    void drawBackground(FancySliderFill filler) {
        CanvasRenderingContext2D ctx = this.background.context2D;

        ImageData img = ctx.getImageData(0, 0, this.background.width, this.background.height);

        for (int x = 0; x<this.width; x++) {
            for (int y = 0; y<this.height; y++) {
                int i = (y * this.width + x) * 4;

                Colour c = filler(this.vertical ? y / this.height : x / this.width);

                img.data[i] = c.red;
                img.data[i+1] = c.green;
                img.data[i+2] = c.blue;
                img.data[i+3] = 255;
            }
        }

        ctx.putImageData(img, 0, 0);
    }

    void appendTo(Node parent) {
        parent.append(this.bar);
    }

    void destroy() {
        this.bar.remove();
        _sliders.remove(this);
    }
}

class ColourPickerMouseHandler {
    static bool _registered = false;

    static void init() {
        if (_registered) {return;}

        _registered = true;

        window.onMouseUp.listen((MouseEvent e) {
            for (ColourPicker p in ColourPicker._pickers) {

            }

            for (FancySlider s in FancySlider._sliders) {
                s._mouseUp(e);
            }
        });

        window.onMouseMove.listen((MouseEvent e) {
            for (ColourPicker p in ColourPicker._pickers) {

            }

            for (FancySlider s in FancySlider._sliders) {
                s._mouseMove(e);
            }
        });
    }
}