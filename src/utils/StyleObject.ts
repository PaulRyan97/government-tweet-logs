
class StyleObject
{
    style: Partial<CSSStyleDeclaration>;

    constructor()
    {
        this.style = {
            fontFamily: "Arial",
            boxSizing: "border-box",
        };
    }

    setWidth(width: string | number)
    {
        this.style.width = this.toPxString(width);
        return this;
    }

    setHeight(height: string | number)
    {
        this.style.height = this.toPxString(height);
        return this;
    }

    setMinHeight(height: string | number)
    {
        this.style.minHeight = this.toPxString(height);
        return this;
    }

    setDisplay(display: string)
    {
        this.style.display = display;
        return this;
    }

    setFlexDirection(direction: string)
    {
        this.style.flexDirection = direction;
        return this;
    }

    setFlexGrow(flexGrow: number): StyleObject
    {
        this.style.flexGrow = flexGrow.toString();
        return this;
    }

    setFontSize(fontSize: string | number)
    {
        this.style.fontSize = this.toPxString(fontSize);
        return this;
    }

    setMargin(margin: string | number)
    {
        this.style.margin = this.toPxString(margin);
        return this;
    }

    setMarginBottom(marginBottom: string | number)
    {
        this.style.marginBottom = this.toPxString(marginBottom);
        return this;
    }

    setMarginTop(marginTop: string | number)
    {
        this.style.marginTop = this.toPxString(marginTop);
        return this;
    }

    setMarginLeft(marginLeft: string | number)
    {
        this.style.marginLeft = this.toPxString(marginLeft);
        return this;
    }

    setMarginRight(marginRight: string | number)
    {
        this.style.marginRight = this.toPxString(marginRight);
        return this;
    }

    setPadding(padding: string | number)
    {
        this.style.padding = this.toPxString(padding);
        return this;
    }

    setPaddingTop(paddingTop: string | number)
    {
        this.style.paddingTop = this.toPxString(paddingTop);
        return this;
    }

    setPaddingBottom(paddingBottom: string | number)
    {
        this.style.paddingBottom = this.toPxString(paddingBottom);
        return this;
    }

    setBasics(width: string | number, height: string | number, left: string | number, top: string | number)
    {
        this.style.width = this.toPxString(width);
        this.style.height = this.toPxString(height);
        this.style.left = this.toPxString(left);
        this.style.top = this.toPxString(top);
        return this;
    }

    setPosition(position: string)
    {
        this.style.position = position;
        return this;
    }

    setTop(top: string | number)
    {
        this.style.top = this.toPxString(top);
        return this;
    }

    setBottom(bottom: string | number)
    {
        this.style.bottom = this.toPxString(bottom);
        return this;
    }

    setLeft(left: string | number)
    {
        this.style.left = this.toPxString(left);
        return this;
    }

    setRight(right: string | number)
    {
        this.style.right = this.toPxString(right);
        return this;
    }

    setBorder(border: string)
    {
        this.style.border = border;
        return this;
    }

    setBorderRight(border: string)
    {
        this.style.borderRight = border;
        return this;
    }

    setBorderRadius(radius: string | number)
    {
        this.style.borderRadius = this.toPxString(radius);
        return this;
    }

    setBorderTop(borderTop: string)
    {
        this.style.borderTop = borderTop;
        return this;
    }

    setBackgroundColor(color: string)
    {
        this.style.backgroundColor = color;
        return this;
    }

    setBackgroundImage(backgroundImage: string)
    {
        this.style.backgroundImage = backgroundImage;
        return this;
    }

    setBoxShadow(boxShadow: string)
    {
        this.style.boxShadow = boxShadow;
        return this;
    }

    setOverflow(overflow: string)
    {
        this.style.overflow = overflow;
        return this;
    }

    setOverflowX(overflowX: string)
    {
        this.style.overflowX = overflowX;
        return this;
    }

    setOverflowY(overflowY: string)
    {
        this.style.overflowY = overflowY;
        return this;
    }

    setWhiteSpace(whitespace: string)
    {
        this.style.whiteSpace = whitespace;
        return this;
    }

    setTextOverflow(overflow: string)
    {
        this.style.textOverflow = overflow;
        return this;
    }

    setOpacity(opacity: number)
    {
        this.style.opacity = opacity.toString();
        return this;
    }

    setAlignItems(align: string)
    {
        this.style.alignItems = align;
        return this;
    }

    setJustifyContent(justify: string)
    {
        this.style.justifyContent = justify;
        return this;
    }

    setColor(color: string)
    {
        this.style.color = color;
        return this;
    }

    setTransition(property: string, duration: number)
    {
        if(this.style.transition !== undefined)
        {
            this.style.transition = this.style.transition + ", "  + property + " " + duration + "s";
        }
        else
        {
            this.style.transition = property + " " + duration + "s";
        }
        return this;
    }

    toPxString(value: string | number): string
    {
        return typeof value === "string" ? value : value + "px";
    }

    getStyle(): Object
    {
        return this.style;
    }
}

export default StyleObject;