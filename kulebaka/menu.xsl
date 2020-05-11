<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes" />
    <xsl:key name="category" match="position" use="@category" />
    <xsl:template match="menu">
        <div class="menu">
            <xsl:apply-templates select="position[generate-id(.)=generate-id(key('category',@category))]" />
        </div>
    </xsl:template>
    <xsl:template match="position">
        <div data-menu="{@category}" class="assortment">
            <xsl:if test="/menu/meta/currentCategory != @category">
                <xsl:attribute name="class">hidden assortment</xsl:attribute>
            </xsl:if>
            <xsl:if test="/menu/meta/currentCategory = @category">
                <xsl:attribute name="id">currentMenu</xsl:attribute>
            </xsl:if>
            <xsl:for-each select="key('category',@category)">
                <xsl:choose>
                    <xsl:when test="position() &lt; 8">
                        <div class="assortment4">
                            <img src="img/{@category}/{./image}" />
                            <p class="title">
                                <xsl:value-of disable-output-escaping="yes" select="./name" />
                            </p>
                            <p class="price">
                                <xsl:value-of select="./price" />
                            </p>
                            <p class="weight">
                                <xsl:value-of select="./weight" />
                            </p>
                            <p class="description">
                                <xsl:value-of select="./description" />
                            </p>
                            <xsl:if test="./notice">
                                <p class="notice">
                                    <xsl:value-of select="./notice" />
                                </p>
                            </xsl:if>
                            <button>Заказать</button>
                            <div class="amount-container">
                                <input onkeypress="return event.charCode &gt;= 48 &amp;&amp; event.charCode&lt;=57" placeholder="Количество" type="text" class="amount" />
                                <span class="ok-button">&#10003;</span>
                            </div>
                        </div>
                    </xsl:when>
                    <xsl:when test="position() = 8">
                        <xsl:if test="count(key('category',@category))>8">
                            <div class="more assortment4">
                                <xsl:if test="/menu/meta/currentCategory = @category">
                                    <xsl:attribute name="id">more</xsl:attribute>
                                </xsl:if>
                                <p>Еще                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                    <br />
                                    <span class="remainder">
                                        <xsl:value-of select="count(key('category',@category)) - position() + 1" />
                                    </span>
                                    <br />
                                вида(ов)                                                                                                                                                                                                                                                                                                                                                    
                                    <br />
                                    <xsl:if test="@category='bread'">
                                хлеба
                                </xsl:if>
                                    <xsl:if test="@category='drink'">
                                напитков
                                </xsl:if>
                                    <xsl:if test="@category='cake'">
                                сытных пирогов
                                </xsl:if>
                                    <xsl:if test="@category='sweetcake'">
                                сладких пирогов
                                </xsl:if>
                                </p>
                                <img src="img/arrow-right.png" />
                            </div>
                            <div class="hidden assortment4">
                                <img src="img/{@category}/{./image}" />
                                <p class="title">
                                    <xsl:value-of disable-output-escaping="yes" select="./name" />
                                </p>
                                <p class="price">
                                    <xsl:value-of select="./price" />
                                </p>
                                <p class="weight">
                                    <xsl:value-of select="./weight" />
                                </p>
                                <p class="description">
                                    <xsl:value-of select="./description" />
                                </p>
                                <xsl:if test="./notice">
                                    <p class="notice">
                                        <xsl:value-of select="./notice" />
                                    </p>
                                </xsl:if>
                                <button>Заказать</button>
                                <div class="amount-container">
                                    <input onkeypress="return event.charCode &gt;= 48 &amp;&amp; event.charCode&lt;=57" placeholder="Количество" type="text" class="amount" />
                                    <span class="ok-button">&#10003;</span>
                                </div>
                            </div>
                        </xsl:if>
                        <xsl:if test="count(key('category',@category)) = 8">
                            <div class="assortment4">
                                <img src="img/{@category}/{./image}" />
                                <p class="title">
                                    <xsl:value-of disable-output-escaping="yes" select="./name" />
                                </p>
                                <p class="price">
                                    <xsl:value-of select="./price" />
                                </p>
                                <p class="weight">
                                    <xsl:value-of select="./weight" />
                                </p>
                                <p class="description">
                                    <xsl:value-of select="./description" />
                                </p>
                                <xsl:if test="./notice">
                                    <p class="notice">
                                        <xsl:value-of select="./notice" />
                                    </p>
                                </xsl:if>
                                <button>Заказать</button>
                                <div class="amount-container">
                                    <input onkeypress="return event.charCode &gt;= 48 &amp;&amp; event.charCode&lt;=57" placeholder="Количество" type="text" class="amount" />
                                    <span class="ok-button">&#10003;</span>
                                </div>
                            </div>
                        </xsl:if>
                    </xsl:when>
                    <xsl:otherwise>
                        <div class="hidden assortment4">
                            <img src="img/{@category}/{./image}" />
                            <p class="title">
                                <xsl:value-of select="./name" />
                            </p>
                            <p class="price">
                                <xsl:value-of select="./price" />
                            </p>
                            <p class="weight">
                                <xsl:value-of select="./weight" />
                            </p>
                            <p class="description">
                                <xsl:value-of select="./description" />
                            </p>
                            <xsl:if test="./notice">
                                <p class="notice">
                                    <xsl:value-of select="./notice" />
                                </p>
                            </xsl:if>
                            <button>Заказать</button>
                            <div class="amount-container">
                                <input onkeypress="return event.charCode &gt;= 48 &amp;&amp; event.charCode&lt;=57" placeholder="Количество" type="text" class="amount" />
                                <span class="ok-button">&#10003;</span>
                            </div>
                        </div>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:for-each>
        </div>
    </xsl:template>
</xsl:stylesheet>