<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes" />
    <xsl:template match="reviews">
        <div class="div34 slider-content">
            <div data-slides-count="{count(review)}" id="frame" class="frame">
                <xsl:for-each select="review">
                    <div class="fade slide-frame" style="float:left;">
                        <div class="div2 left-side">
                            <p>
                                <xsl:value-of select="text" />
                            </p>
                        </div>
                        <div class="div2 right-side">
                            <img src="img/reviews/{image}" />
                        </div>
                    </div>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>