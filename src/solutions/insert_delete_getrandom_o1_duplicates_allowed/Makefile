# Tools needed: groff, mactex (for pdfcrop), pdf2svg, imagemagick, and inkscape

PDF = $(patsubst %.pic,%.pdf,    $(wildcard *.pic))
SVG = $(patsubst %.pic,%.svg,    $(wildcard *.pic))
PNG = $(patsubst %.pic,%@2x.png, $(wildcard *.pic))

all: $(PDF) $(SVG) $(PNG)

%.pdf: %.pic
	pdfroff -p -e -m ms -P-p512c,512c $< | pdfcrop --margins 4 - $@

%.svg: %.pdf
	pdf2svg $< $@

%@2x.png: %.svg
	inkscape --export-type=png --export-dpi=192 --export-filename=- $< \
		| magick -units PixelsPerInch -density 144 - -background white -flatten $@

clean:
	rm -f $(PDF) $(SVG) $(PNG)
